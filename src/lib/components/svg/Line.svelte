<script lang="ts">
	import { dev } from '$app/environment';
	import type { Point, StrokeStyle, CircleMarker } from './types';

	/**
	 * Line: SVG line shape without arrowhead.
	 * Positions itself absolutely on the canvas using the from/to coordinates.
	 * Should be used inside a Fragment WITHOUT a layout prop.
	 *
	 * Supports optional circle markers at start and/or end points.
	 *
	 * @example Simple line
	 * ```svelte
	 * <Fragment step={17} animate="draw">
	 *   <Line from={{ x: 453, y: 285 }} to={{ x: 547, y: 285 }} stroke={{ width: 3 }} />
	 * </Fragment>
	 * ```
	 *
	 * @example Line with circle markers (small to large)
	 * ```svelte
	 * <Fragment step={4} animate="wipe">
	 *   <Line from={{ x: 238, y: 201 }} to={{ x: 339, y: 201 }}
	 *     stroke={{ width: 8 }}
	 *     startMarker={{ radius: 4 }}
	 *     endMarker={{ radius: 8 }}
	 *   />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Start point of the line (canvas coordinates) */
		from: Point;
		/** End point of the line (canvas coordinates) */
		to: Point;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Circle marker at the start point */
		startMarker?: CircleMarker;
		/** Circle marker at the end point */
		endMarker?: CircleMarker;
		/** Z-index for layering */
		zIndex?: number;
	}

	let { from, to, stroke = {}, startMarker, endMarker, zIndex = 1 }: Props = $props();

	const strokeWidth = $derived(stroke.width ?? 2);
	const strokeColor = $derived(stroke.color ?? 'var(--stroke-level-0)');

	// Calculate bounding box for the SVG
	const padding = $derived(strokeWidth * 2);
	const minX = $derived(Math.min(from.x, to.x) - padding);
	const minY = $derived(Math.min(from.y, to.y) - padding);
	const maxX = $derived(Math.max(from.x, to.x) + padding);
	const maxY = $derived(Math.max(from.y, to.y) + padding);
	const svgWidth = $derived(maxX - minX);
	const svgHeight = $derived(maxY - minY);

	// Translate coordinates to SVG-local space
	const localFromX = $derived(from.x - minX);
	const localFromY = $derived(from.y - minY);
	const localToX = $derived(to.x - minX);
	const localToY = $derived(to.y - minY);

	// Calculate line length for draw animation
	const length = $derived(Math.hypot(to.x - from.x, to.y - from.y));

	// Calculate extra padding needed for markers
	const markerPadding = $derived(Math.max(
		startMarker?.radius ?? 0,
		endMarker?.radius ?? 0
	));
</script>

<svg 
	class="svg-line" 
	width={svgWidth + markerPadding * 2}
	height={svgHeight + markerPadding * 2}
	style="position: absolute; left: {minX - markerPadding}px; top: {minY - markerPadding}px; overflow: visible; pointer-events: {dev ? 'auto' : 'none'}; z-index: {zIndex}; --path-length: {length};"
	data-shape-type={dev ? 'line' : undefined}
	data-coords={dev ? JSON.stringify({ from, to }) : undefined}
>
	<line
		x1={localFromX + markerPadding}
		y1={localFromY + markerPadding}
		x2={localToX + markerPadding}
		y2={localToY + markerPadding}
		stroke={strokeColor}
		stroke-width={strokeWidth}
		stroke-dasharray={stroke.dash}
		stroke-linecap={stroke.linecap ?? 'butt'}
	/>
	{#if startMarker}
		<circle
			cx={localFromX + markerPadding}
			cy={localFromY + markerPadding}
			r={startMarker.radius}
			fill={startMarker.fill ?? strokeColor}
		/>
	{/if}
	{#if endMarker}
		<circle
			cx={localToX + markerPadding}
			cy={localToY + markerPadding}
			r={endMarker.radius}
			fill={endMarker.fill ?? strokeColor}
		/>
	{/if}
</svg>
