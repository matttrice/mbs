<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import { dev } from '$app/environment';
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
		/** Z-index for stacking order */
		zIndex?: number;
	}

	let { d, fill, stroke, zIndex = 1 }: Props = $props();

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
				color: stroke.color ?? 'var(--stroke-level-0)',
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

<div
	class="svg-path-container"
	data-shape-type={dev ? 'path' : undefined}
	data-coords={dev ? JSON.stringify({ d }) : undefined}
	style="
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: {zIndex};
		pointer-events: {dev ? 'auto' : 'none'};
	"
>
	<svg
		bind:this={svgEl}
		class="svg-shape svg-path"
		style="width: 100%; height: 100%; overflow: visible;"
	></svg>
</div>

<style>
	.svg-path-container {
		overflow: visible;
	}

	.svg-shape {
		display: block;
	}
</style>
