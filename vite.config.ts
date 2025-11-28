import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/tests/setup.ts']
	},
	// Tell Vitest to use the `browser` entry points in `package.json` files
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
});
