import { dev } from '$app/environment';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, relative } from 'path';
import { globSync } from 'fs';

const PROJECT_ROOT = resolve(import.meta.dirname, '../../../../..');

export const POST: RequestHandler = async ({ request }) => {
	if (!dev) return new Response('Forbidden', { status: 403 });

	const { routePath, find, replace, file } = await request.json();

	if (!routePath || !find || !replace) {
		return json({ error: 'Missing routePath, find, or replace' }, { status: 400 });
	}

	if (find === replace) {
		return json({ error: 'Find and replace are identical' }, { status: 400 });
	}

	const routeDir = resolve(PROJECT_ROOT, 'src/routes', routePath);

	// Ensure routeDir is within project
	if (!routeDir.startsWith(resolve(PROJECT_ROOT, 'src/routes'))) {
		return json({ error: 'Invalid route path' }, { status: 400 });
	}

	// If a specific file is provided, use it directly
	if (file) {
		const filePath = resolve(routeDir, file);
		if (!filePath.startsWith(routeDir) || !filePath.endsWith('.svelte')) {
			return json({ error: 'Invalid file path' }, { status: 400 });
		}
		return applyReplace(filePath, find, replace, file);
	}

	// Glob all .svelte files under the route directory
	let svelteFiles: string[];
	try {
		svelteFiles = globSync('**/*.svelte', { cwd: routeDir }).map((f: string) => f.toString());
	} catch {
		return json({ error: `Route directory not found: ${routePath}` }, { status: 404 });
	}

	if (svelteFiles.length === 0) {
		return json({ error: `No .svelte files in route: ${routePath}` }, { status: 404 });
	}

	// Search all files for the find string
	const matches: { file: string; count: number }[] = [];
	for (const f of svelteFiles) {
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

	// Single file matched
	const match = matches[0];
	if (match.count > 1) {
		return json({
			ambiguous: true,
			files: [{ file: match.file, count: match.count }]
		});
	}

	// Exactly one match in one file — apply
	const absPath = resolve(routeDir, match.file);
	return applyReplace(absPath, find, replace, match.file);
};

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
