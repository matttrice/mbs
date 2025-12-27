<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import type { StrokeStyle } from './types';

	/**
	 * Ellipse: SVG ellipse shape.
	 * Uses svg.js for rendering. Integrates with Fragment's animation system.
	 *
	 * @example Filled ellipse
	 * ```svelte
	 * <Fragment step={5} layout={{ x: 100, y: 100, width: 200, height: 100 }}>
	 *   <Ellipse cx={100} cy={50} rx={98} ry={48} fill="#FFD700" />
	 * </Fragment>
	 * ```
	 *
	 * @example Ellipse with stroke
	 * ```svelte
	 * <Fragment step={5} layout={{ x: 100, y: 100, width: 200, height: 100 }} animate="draw">
	 *   <Ellipse cx={100} cy={50} rx={95} ry={45} stroke={{ width: 3, color: '#0000FF' }} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Center X coordinate (relative to Fragment's layout) */
		cx: number;
		/** Center Y coordinate (relative to Fragment's layout) */
		cy: number;
		/** Horizontal radius */
		rx: number;
		/** Vertical radius */
		ry: number;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
	}

	let { cx, cy, rx, ry, fill, stroke }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;

		// Create ellipse
		const ellipse = draw.ellipse(rx * 2, ry * 2).center(cx, cy);

		// Apply fill
		if (fill) {
			ellipse.fill(fill);
		} else {
			ellipse.fill('none');
		}

		// Apply stroke
		if (stroke) {
			ellipse.stroke({
				width: stroke.width ?? 1,
				color: stroke.color ?? '#000000',
				dasharray: stroke.dash ?? undefined
			});
		}

		// Approximate circumference for draw animation (Ramanujan approximation)
		const h = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
		const circumference = Math.PI * (rx + ry) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
		svgEl.style.setProperty('--path-length', circumference.toString());
	});

	onDestroy(() => {
		draw?.clear();
		draw = null;
	});
</script>

<svg
	bind:this={svgEl}
	class="svg-shape svg-ellipse"
	style="width: 100%; height: 100%; overflow: visible;"
></svg>

<style>
	.svg-shape {
		display: block;
	}
</style>
