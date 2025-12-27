<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import type { StrokeStyle } from './types';

	/**
	 * Path: Arbitrary SVG path using SVG path data string.
	 * Uses svg.js for rendering. Integrates with Fragment's animation system.
	 *
	 * @example Curved path
	 * ```svelte
	 * <Fragment step={15} layout={{ x: 200, y: 100, width: 300, height: 200 }} animate="draw">
	 *   <Path d="M 0,100 Q 150,0 300,100" stroke={{ width: 4, color: '#FF0000' }} />
	 * </Fragment>
	 * ```
	 *
	 * @example Dashed bezier curve
	 * ```svelte
	 * <Fragment step={10} layout={{ x: 50, y: 50, width: 400, height: 200 }} animate="draw">
	 *   <Path d="M 0,100 C 100,0 300,200 400,100" stroke={{ width: 3, dash: '10,5' }} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** SVG path data string (d attribute) */
		d: string;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
	}

	let { d, fill, stroke }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;

		// Create path
		const path = draw.path(d);

		// Apply fill
		if (fill) {
			path.fill(fill);
		} else {
			path.fill('none');
		}

		// Apply stroke
		if (stroke) {
			path.stroke({
				width: stroke.width ?? 2,
				color: stroke.color ?? '#000000',
				linecap: stroke.linecap ?? 'round',
				linejoin: stroke.linejoin ?? 'round',
				dasharray: stroke.dash ?? undefined
			});
		}

		// Calculate path length for draw animation
		const pathEl = svgEl.querySelector('path');
		if (pathEl) {
			const pathLength = pathEl.getTotalLength();
			svgEl.style.setProperty('--path-length', pathLength.toString());
		}
	});

	onDestroy(() => {
		draw?.clear();
		draw = null;
	});
</script>

<svg
	bind:this={svgEl}
	class="svg-shape svg-path"
	style="width: 100%; height: 100%; overflow: visible;"
></svg>

<style>
	.svg-shape {
		display: block;
	}
</style>
