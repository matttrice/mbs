<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import { dev } from '$app/environment';
	import type { Point, StrokeStyle } from './types';

	/**
	 * Polygon: SVG polygon shape from array of points.
	 * Uses svg.js for rendering. Integrates with Fragment's animation system.
	 *
	 * @example Triangle
	 * ```svelte
	 * <Fragment step={5} layout={{ x: 100, y: 100, width: 100, height: 86 }}>
	 *   <Polygon points={[{ x: 50, y: 0 }, { x: 100, y: 86 }, { x: 0, y: 86 }]} fill="#FFD700" />
	 * </Fragment>
	 * ```
	 *
	 * @example Star outline
	 * ```svelte
	 * <Fragment step={10} layout={{ x: 100, y: 100, width: 100, height: 100 }} animate="draw">
	 *   <Polygon points={starPoints} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Array of points defining the polygon vertices */
		points: Point[];
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Z-index for stacking order */
		zIndex?: number;
	}

	let { points, fill, stroke, zIndex = 1 }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	// Convert Point[] to svg.js polygon format
	const pointsArray = $derived(points.map(p => [p.x, p.y] as [number, number]));

	// Calculate perimeter for draw animation
	const perimeter = $derived(() => {
		let total = 0;
		for (let i = 0; i < points.length; i++) {
			const p1 = points[i];
			const p2 = points[(i + 1) % points.length];
			const dx = p2.x - p1.x;
			const dy = p2.y - p1.y;
			total += Math.sqrt(dx * dx + dy * dy);
		}
		return total;
	});

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;

		// Create polygon
		const polygon = draw.polygon(pointsArray);

		// Apply fill
		if (fill) {
			polygon.fill(fill);
		} else {
			polygon.fill('none');
		}

		// Apply stroke
		if (stroke) {
			polygon.stroke({
				width: stroke.width ?? 1,
				color: stroke.color ?? 'var(--stroke-level-0)',
				linejoin: stroke.linejoin ?? 'miter',
				dasharray: stroke.dash ?? undefined
			});
		}

		// Set perimeter for draw animation
		svgEl.style.setProperty('--path-length', perimeter().toString());
	});

	onDestroy(() => {
		draw?.clear();
		draw = null;
	});
</script>

<div
	class="svg-polygon-container"
	data-shape-type={dev ? 'polygon' : undefined}
	data-coords={dev ? JSON.stringify({ points }) : undefined}
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
		class="svg-shape svg-polygon"
		style="width: 100%; height: 100%; overflow: visible;"
	></svg>
</div>

<style>
	.svg-polygon-container {
		overflow: visible;
	}

	.svg-shape {
		display: block;
	}
</style>
