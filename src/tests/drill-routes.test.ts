import { describe, it, expect } from 'vitest';
import fg from 'fast-glob';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Drill Route Validation Test
 * 
 * Scans all Svelte files under src/routes/ and verifies that every
 * drillTo prop points to an existing route (+page.svelte file).
 * 
 * This catches broken drill links at test time rather than runtime.
 * 
 * Note: Dynamic drillTo values (e.g., drillTo={variable}) are skipped
 * since they can't be statically validated.
 */
describe('Drill Routes', () => {
	it('all drillTo targets should have corresponding route files', async () => {
		const routesDir = join(process.cwd(), 'src/routes');
		
		// Find all .svelte files under src/routes
		const svelteFiles = await fg('**/*.svelte', { cwd: routesDir, absolute: true });
		
		const missingRoutes: { source: string; drillTo: string; line: number }[] = [];
		
		// Regex to match drillTo="value" or drillTo={'value'} or drillTo={`value`}
		// Excludes dynamic values like drillTo={variable} or drillTo={item.path}
		const drillToRegex = /drillTo=["']([^"']+)["']/g;
		
		for (const file of svelteFiles) {
			const content = readFileSync(file, 'utf-8');
			const lines = content.split('\n');
			
			lines.forEach((lineContent, index) => {
				let match;
				while ((match = drillToRegex.exec(lineContent)) !== null) {
					const drillToValue = match[1];
					const targetPath = join(routesDir, drillToValue, '+page.svelte');
					
					if (!existsSync(targetPath)) {
						missingRoutes.push({
							source: file.replace(process.cwd() + '/', ''),
							drillTo: drillToValue,
							line: index + 1
						});
					}
				}
				// Reset regex lastIndex for next line
				drillToRegex.lastIndex = 0;
			});
		}
		
		if (missingRoutes.length > 0) {
			const errorMessage = missingRoutes
				.map(r => `  ${r.source}:${r.line} → drillTo="${r.drillTo}"`)
				.join('\n');
			
			expect.fail(`Missing drill route targets:\n${errorMessage}`);
		}
		
		expect(missingRoutes).toHaveLength(0);
	});
});
