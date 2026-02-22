<script lang="ts">
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import { dev } from '$app/environment';
	import type { StrokeStyle } from './types';

	/**
	 * Circle: Self-positioning SVG circle shape.
	 * Uses canvas coordinates (960×540) and renders its own absolutely-positioned SVG.
	 */
	interface Props {
		/** Center X coordinate in canvas coordinates (960×540) */
		cx: number;
		/** Center Y coordinate in canvas coordinates (960×540) */
		cy: number;
		/** Radius */
		r: number;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Z-index for stacking order */
		zIndex?: number;
	}

	let { cx, cy, r, fill, stroke, zIndex = 1 }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	const padding = $derived((stroke?.width ?? 1) + 2);
	const minX = $derived(cx - r - padding);
	const minY = $derived(cy - r - padding);
	const width = $derived((r + padding) * 2);
	const height = $derived((r + padding) * 2);

	const localCx = $derived(r + padding);
	const localCy = $derived(r + padding);

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;
		draw.viewbox(0, 0, width, height);

		const circle = draw.circle(r * 2).center(localCx, localCy);

		if (fill) {
			circle.fill(fill);
		} else {
			circle.fill('none');
		}

		if (stroke) {
			circle.stroke({
				width: stroke.width ?? 1,
				color: stroke.color ?? 'var(--stroke-level-0)',
				dasharray: stroke.dash ?? undefined
			});
		}

		const circumference = 2 * Math.PI * r;
		svgEl.style.setProperty('--path-length', circumference.toString());
	});

	onDestroy(() => {
		draw?.clear();
		draw = null;
	});
</script>

<div
	class="svg-circle-container"
	data-shape-type={dev ? 'circle' : undefined}
	data-coords={dev ? JSON.stringify({ cx, cy, r }) : undefined}
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
		class="svg-shape svg-circle"
		style="width: 100%; height: 100%; overflow: visible;"
	></svg>
</div>

<style>
	.svg-circle-container {
		overflow: visible;
	}

	.svg-shape {
		display: block;
	}
</style>
