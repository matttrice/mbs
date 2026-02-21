<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import { dev } from '$app/environment';
	import type { StrokeStyle } from './types';

	/**
	 * Ellipse: Self-positioning SVG ellipse shape.
	 * Uses canvas coordinates (960×540) and renders its own absolutely-positioned SVG.
	 * Integrates with Fragment's animation system.
	 *
	 * @example Filled ellipse
	 * ```svelte
	 * <Fragment step={5} animate="fade">
	 *   <Ellipse cx={200} cy={150} rx={98} ry={48} fill="#FFD700" />
	 * </Fragment>
	 * ```
	 *
	 * @example Ellipse with stroke
	 * ```svelte
	 * <Fragment step={5} animate="draw">
	 *   <Ellipse cx={200} cy={150} rx={95} ry={45} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Center X coordinate in canvas coordinates (960×540) */
		cx: number;
		/** Center Y coordinate in canvas coordinates (960×540) */
		cy: number;
		/** Horizontal radius */
		rx: number;
		/** Vertical radius */
		ry: number;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Z-index for stacking order */
		zIndex?: number;
	}

	let { cx, cy, rx, ry, fill, stroke, zIndex = 1 }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	// Calculate bounding box with padding for stroke
	const padding = $derived((stroke?.width ?? 2) + 2);
	const minX = $derived(cx - rx - padding);
	const minY = $derived(cy - ry - padding);
	const width = $derived((rx + padding) * 2);
	const height = $derived((ry + padding) * 2);

	// Local coordinates for the ellipse center within the SVG
	const localCx = $derived(rx + padding);
	const localCy = $derived(ry + padding);

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;
		draw.viewbox(0, 0, width, height);

		// Create ellipse at local center
		const ellipse = draw.ellipse(rx * 2, ry * 2).center(localCx, localCy);

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
				color: stroke.color ?? 'var(--stroke-level-0)',
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

<div
	class="svg-ellipse-container"
	data-shape-type={dev ? 'ellipse' : undefined}
	data-coords={dev ? JSON.stringify({ cx, cy, rx, ry }) : undefined}
	style="
		position: absolute;
		left: {minX}px;
		top: {minY}px;
		width: {width}px;
		height: {height}px;
		z-index: {zIndex};
		pointer-events: {dev ? 'auto' : 'none'};
	"
>
	<svg
		bind:this={svgEl}
		class="svg-shape svg-ellipse"
		style="width: 100%; height: 100%; overflow: visible;"
	></svg>
</div>

<style>
	.svg-ellipse-container {
		overflow: visible;
	}

	.svg-shape {
		display: block;
	}
</style>
