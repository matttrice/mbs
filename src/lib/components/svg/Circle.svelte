<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import type { StrokeStyle } from './types';

	/**
	 * Circle: SVG circle shape.
	 * Uses svg.js for rendering. Integrates with Fragment's animation system.
	 *
	 * @example Filled circle
	 * ```svelte
	 * <Fragment step={5} layout={{ x: 100, y: 100, width: 80, height: 80 }}>
	 *   <Circle cx={40} cy={40} r={38} fill="#FFD700" />
	 * </Fragment>
	 * ```
	 *
	 * @example Circle with stroke
	 * ```svelte
	 * <Fragment step={5} layout={{ x: 100, y: 100, width: 100, height: 100 }} animate="draw">
	 *   <Circle cx={50} cy={50} r={45} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Center X coordinate (relative to Fragment's layout) */
		cx: number;
		/** Center Y coordinate (relative to Fragment's layout) */
		cy: number;
		/** Radius */
		r: number;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
	}

	let { cx, cy, r, fill, stroke }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;

		// Create circle
		const circle = draw.circle(r * 2).center(cx, cy);

		// Apply fill
		if (fill) {
			circle.fill(fill);
		} else {
			circle.fill('none');
		}

		// Apply stroke
		if (stroke) {
			circle.stroke({
				width: stroke.width ?? 1,
				color: stroke.color ?? 'var(--stroke-level-0)',
				dasharray: stroke.dash ?? undefined
			});
		}

		// Set circumference for draw animation
		const circumference = 2 * Math.PI * r;
		svgEl.style.setProperty('--path-length', circumference.toString());
	});

	onDestroy(() => {
		draw?.clear();
		draw = null;
	});
</script>

<svg
	bind:this={svgEl}
	class="svg-shape svg-circle"
	style="width: 100%; height: 100%; overflow: visible;"
></svg>

<style>
	.svg-shape {
		display: block;
	}
</style>
