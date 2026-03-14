import { dev } from '$app/environment';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { globSync } from 'fs';

const PROJECT_ROOT = resolve(import.meta.dirname, '../../../../..');

export const POST: RequestHandler = async ({ request }) => {
	if (!dev) return new Response('Forbidden', { status: 403 });

	const body = await request.json();
	const { mode } = body;

	if (mode === 'insert') {
		return handleInsert(body);
	}
	return handleReplace(body);
};

// --- Insert mode: insert new code block near a given step ---

function handleInsert(body: Record<string, unknown>) {
	const { routePath, code, step, file } = body as {
		routePath?: string;
		code?: string;
		step?: number;
		file?: string;
	};

	if (!routePath || !code) {
		return json({ error: 'Missing routePath or code' }, { status: 400 });
	}

	const routeDir = resolve(PROJECT_ROOT, 'src/routes', routePath);
	if (!routeDir.startsWith(resolve(PROJECT_ROOT, 'src/routes'))) {
		return json({ error: 'Invalid route path' }, { status: 400 });
	}

	if (file) {
		const filePath = resolve(routeDir, file);
		if (!filePath.startsWith(routeDir) || !filePath.endsWith('.svelte')) {
			return json({ error: 'Invalid file path' }, { status: 400 });
		}
		return applyInsert(filePath, code, step ?? 0, file);
	}

	const svelteFiles = findSvelteFiles(routeDir, routePath);
	if ('error' in svelteFiles) return svelteFiles.response;

	if (step !== undefined && step > 0) {
		const stepPattern = new RegExp(`step=\\{${Math.floor(step)}[.}]`);
		const candidates: string[] = [];
		for (const f of svelteFiles.files) {
			const absPath = resolve(routeDir, f);
			try {
				const content = readFileSync(absPath, 'utf-8');
				if (stepPattern.test(content)) candidates.push(f);
			} catch {
				// skip
			}
		}

		if (candidates.length === 1) {
			return applyInsert(resolve(routeDir, candidates[0]), code, step, candidates[0]);
		}
		if (candidates.length > 1) {
			return json({
				ambiguous: true,
				files: candidates.map((f) => ({ file: f, count: 1 }))
			});
		}
	}

	// Fallback: find files with Fragment/Slide template content
	const templateFiles = svelteFiles.files.filter((f) => {
		try {
			const content = readFileSync(resolve(routeDir, f), 'utf-8');
			return content.includes('<Fragment') || content.includes('<Slide');
		} catch {
			return false;
		}
	});

	if (templateFiles.length === 1) {
		return applyInsert(resolve(routeDir, templateFiles[0]), code, step ?? 0, templateFiles[0]);
	}
	if (templateFiles.length > 1) {
		return json({
			ambiguous: true,
			files: templateFiles.map((f) => ({ file: f, count: 1 }))
		});
	}

	return json({ notFound: true, error: 'No suitable file found in route' }, { status: 404 });
}

function applyInsert(absPath: string, code: string, step: number, displayFile: string) {
	try {
		const content = readFileSync(absPath, 'utf-8');
		const insertPos = findInsertPosition(content, step);
		const before = content.slice(0, insertPos);
		const after = content.slice(insertPos);

		const needsLeadingNewline = before.length > 0 && !before.endsWith('\n\n');
		const prefix = needsLeadingNewline ? (before.endsWith('\n') ? '\n' : '\n\n') : '';
		const suffix = after.startsWith('\n') ? '' : '\n';

		const updated = before + prefix + code + suffix + after;
		writeFileSync(absPath, updated, 'utf-8');
		return json({ ok: true, file: displayFile });
	} catch {
		return json({ error: `Failed to read/write ${displayFile}` }, { status: 500 });
	}
}

function findInsertPosition(content: string, step: number): number {
	if (step === 0) {
		return findStaticInsertPosition(content);
	}
	if (step < 0) {
		return findEndOfTemplate(content);
	}

	const baseStep = Math.floor(step);

	// Find all step={N} and step={N.x} occurrences
	const stepRegex = new RegExp(`step=\\{${baseStep}(?:\\.\\d+)?\\}`, 'g');
	let lastStepMatch: RegExpExecArray | null = null;
	let match: RegExpExecArray | null;

	while ((match = stepRegex.exec(content)) !== null) {
		lastStepMatch = match;
	}

	if (!lastStepMatch) {
		return findInsertAfterClosestStep(content, baseStep);
	}

	// Find the closing </Fragment> after this step match
	const closeIdx = content.indexOf('</Fragment>', lastStepMatch.index);
	if (closeIdx !== -1) {
		return closeIdx + '</Fragment>'.length;
	}

	// Self-closing or SVG-only — find end of line
	const nextNewline = content.indexOf('\n', lastStepMatch.index + lastStepMatch[0].length);
	return nextNewline !== -1 ? nextNewline + 1 : content.length;
}

function findInsertAfterClosestStep(content: string, targetStep: number): number {
	const allSteps = new RegExp(`step=\\{(\\d+(?:\\.\\d+)?)\\}`, 'g');
	let bestMatch: { index: number; step: number; length: number } | null = null;
	let match: RegExpExecArray | null;

	while ((match = allSteps.exec(content)) !== null) {
		const s = parseFloat(match[1]);
		if (
			s <= targetStep &&
			(!bestMatch || s > bestMatch.step || (s === bestMatch.step && match.index > bestMatch.index))
		) {
			bestMatch = { index: match.index, step: s, length: match[0].length };
		}
	}

	if (bestMatch) {
		const closeIdx = content.indexOf('</Fragment>', bestMatch.index);
		if (closeIdx !== -1) {
			return closeIdx + '</Fragment>'.length;
		}
		const nextNewline = content.indexOf('\n', bestMatch.index + bestMatch.length);
		return nextNewline !== -1 ? nextNewline + 1 : content.length;
	}

	return findEndOfTemplate(content);
}

function findStaticInsertPosition(content: string): number {
	// Insert after last static Fragment (no step prop) and before first stepped Fragment
	const firstStep = content.search(/step=\{/);
	if (firstStep === -1) {
		// No stepped content at all — insert at end of template
		return findEndOfTemplate(content);
	}

	// Find the <Fragment that contains this first step prop
	const beforeStep = content.lastIndexOf('<Fragment', firstStep);
	if (beforeStep !== -1) {
		// Insert just before this Fragment's line start
		const lineStart = content.lastIndexOf('\n', beforeStep);
		return lineStart !== -1 ? lineStart + 1 : beforeStep;
	}

	// Fallback: insert right before the step token's line
	const lineStart = content.lastIndexOf('\n', firstStep);
	return lineStart !== -1 ? lineStart + 1 : firstStep;
}

function findEndOfTemplate(content: string): number {
	const slideClose = content.lastIndexOf('</Slide>');
	if (slideClose !== -1) return slideClose;

	const styleTag = content.lastIndexOf('<style>');
	if (styleTag !== -1) return styleTag;

	return content.length;
}

// --- Replace mode (existing) ---

function handleReplace(body: Record<string, unknown>) {
	const { routePath, find, replace, file } = body as {
		routePath?: string;
		find?: string;
		replace?: string;
		file?: string;
	};

	if (!routePath || !find || !replace) {
		return json({ error: 'Missing routePath, find, or replace' }, { status: 400 });
	}

	if (find === replace) {
		return json({ error: 'Find and replace are identical' }, { status: 400 });
	}

	const routeDir = resolve(PROJECT_ROOT, 'src/routes', routePath);
	if (!routeDir.startsWith(resolve(PROJECT_ROOT, 'src/routes'))) {
		return json({ error: 'Invalid route path' }, { status: 400 });
	}

	if (file) {
		const filePath = resolve(routeDir, file);
		if (!filePath.startsWith(routeDir) || !filePath.endsWith('.svelte')) {
			return json({ error: 'Invalid file path' }, { status: 400 });
		}
		return applyReplace(filePath, find, replace, file);
	}

	const svelteFiles = findSvelteFiles(routeDir, routePath);
	if ('error' in svelteFiles) return svelteFiles.response;

	const matches: { file: string; count: number }[] = [];
	for (const f of svelteFiles.files) {
		const absPath = resolve(routeDir, f);
		try {
			const content = readFileSync(absPath, 'utf-8');
			const count = content.split(find).length - 1;
			if (count > 0) matches.push({ file: f, count });
		} catch {
			// skip unreadable files
		}
	}

	if (matches.length === 0) {
		return json({ notFound: true, error: 'No match found in route' }, { status: 404 });
	}

	if (matches.length > 1) {
		return json({
			ambiguous: true,
			files: matches.map((m) => ({ file: m.file, count: m.count }))
		});
	}

	const match = matches[0];
	if (match.count > 1) {
		return json({
			ambiguous: true,
			files: [{ file: match.file, count: match.count }]
		});
	}

	const absPath = resolve(routeDir, match.file);
	return applyReplace(absPath, find, replace, match.file);
}

// --- Shared utilities ---

function findSvelteFiles(
	routeDir: string,
	routePath: string
): { files: string[] } | { error: true; response: Response } {
	let files: string[];
	try {
		files = globSync('**/*.svelte', { cwd: routeDir }).map((f: string) => f.toString());
	} catch {
		return {
			error: true,
			response: json({ error: `Route directory not found: ${routePath}` }, { status: 404 })
		};
	}

	if (files.length === 0) {
		return {
			error: true,
			response: json({ error: `No .svelte files in route: ${routePath}` }, { status: 404 })
		};
	}

	return { files };
}

function applyReplace(absPath: string, find: string, replace: string, displayFile: string) {
	try {
		const content = readFileSync(absPath, 'utf-8');
		const count = content.split(find).length - 1;

		if (count === 0) {
			return json({ notFound: true, error: `No match in ${displayFile}` }, { status: 404 });
		}
		if (count > 1) {
			return json({
				ambiguous: true,
				files: [{ file: displayFile, count }]
			});
		}

		const updated = content.replace(find, replace);
		writeFileSync(absPath, updated, 'utf-8');
		return json({ ok: true, file: displayFile });
	} catch {
		return json({ error: `Failed to read/write ${displayFile}` }, { status: 500 });
	}
}
