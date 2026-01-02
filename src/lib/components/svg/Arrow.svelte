<script lang="ts">
	import { getArrow, getBoxToBoxArrow } from 'perfect-arrows';
	import type { StrokeStyle, CircleMarker } from './types';

	/**
	 * Arrow: SVG arrow using perfect-arrows library for consistent rendering.
	 * 
	 * Positions itself absolutely on the canvas using the from/to coordinates.
	 * Should be used inside a Fragment WITHOUT a layout prop - Fragment only
	 * provides step-based visibility, Arrow handles its own positioning.
	 * 
	 * Supports two modes:
	 * 1. Point-to-point: Use `from` and `to` with {x, y}
	 * 2. Box-to-box: Use `fromBox` and `toBox` with {x, y, width, height}
	 * 
	 * The `bow` prop controls curvature: 0 = straight, positive = curve right/down, 
	 * negative = curve left/up. Use `flip` to reverse curve direction.
	 * 
	 * Supports optional circle markers at start and/or end points.
	 * 
	 * @example Point-to-point arrow
	 * <Fragment step={5} animate="wipe">
	 *   <Arrow from={{ x: 100, y: 200 }} to={{ x: 300, y: 150 }} stroke={{ width: 4 }} />
	 * </Fragment>
	 * 
	 * @example Arrow with circle at start point
	 * <Fragment step={1.1} animate="wipe-left">
	 *   <Arrow from={{ x: 707.2, y: 292 }} to={{ x: 213.1, y: 292 }}
	 *     stroke={{ width: 18.3 }}
	 *     startMarker={{ radius: 8 }}
	 *   />
	 * </Fragment>
	 * 
	 * @example Box-to-box curved arrow (for timeline self-references)
	 * <Fragment step={27} animate="draw">
	 *   <Arrow 
	 *     fromBox={{ x: 757, y: 356, width: 123, height: 32 }}
	 *     toBox={{ x: 74, y: 362, width: 99, height: 29 }}
	 *     bow={0.3}
	 *     flip={true}
	 *   />
	 * </Fragment>
	 */
	interface Props {
		from?: { x: number; y: number };
		to?: { x: number; y: number };
		fromBox?: { x: number; y: number; width: number; height: number };
		toBox?: { x: number; y: number; width: number; height: number };
		stroke?: StrokeStyle;
		headSize?: number;
		startMarker?: CircleMarker;
		endMarker?: CircleMarker;
		zIndex?: number;
		bow?: number;
		flip?: boolean;
	}

	let { from, to, fromBox, toBox, stroke = {}, headSize = 3, startMarker, endMarker, zIndex = 1, bow = 0, flip = false }: Props = $props();

	const strokeWidth = $derived(stroke.width ?? 4);
	const strokeColor = $derived(stroke.color ?? 'var(--color-bg-darkest)');

	// Head dimensions based on stroke width
	const headLength = $derived(strokeWidth * headSize);
	const headWidth = $derived(strokeWidth * headSize * 0.6);

	// Determine if we're using box-to-box mode
	const isBoxMode = $derived(fromBox !== undefined && toBox !== undefined);

	// Calculate extra padding needed for markers
	const markerPadding = $derived(Math.max(
		startMarker?.radius ?? 0,
		endMarker?.radius ?? 0
	));

	// Calculate canvas-space coordinates for bounding box
	const canvasPoints = $derived(() => {
		if (isBoxMode && fromBox && toBox) {
			return {
				minX: Math.min(fromBox.x, toBox.x),
				minY: Math.min(fromBox.y, toBox.y),
				maxX: Math.max(fromBox.x + fromBox.width, toBox.x + toBox.width),
				maxY: Math.max(fromBox.y + fromBox.height, toBox.y + toBox.height)
			};
		} else if (from && to) {
			return {
				minX: Math.min(from.x, to.x),
				minY: Math.min(from.y, to.y),
				maxX: Math.max(from.x, to.x),
				maxY: Math.max(from.y, to.y)
			};
		}
		return { minX: 0, minY: 0, maxX: 100, maxY: 100 };
	});

	// Add padding for curved arrows and arrowheads
	const padding = $derived(Math.max(headLength * 2, Math.abs(bow) * 200 + 50, markerPadding));
	const minX = $derived(canvasPoints().minX - padding);
	const minY = $derived(canvasPoints().minY - padding);
	const maxX = $derived(canvasPoints().maxX + padding);
	const maxY = $derived(canvasPoints().maxY + padding);
	const svgWidth = $derived(maxX - minX);
	const svgHeight = $derived(maxY - minY);

	// Get arrow geometry from perfect-arrows
	const arrowData = $derived(() => {
		if (isBoxMode && fromBox && toBox) {
			// Box-to-box mode: translate boxes to SVG-local space
			return getBoxToBoxArrow(
				fromBox.x - minX, fromBox.y - minY, fromBox.width, fromBox.height,
				toBox.x - minX, toBox.y - minY, toBox.width, toBox.height,
				{
					bow: bow,
					stretch: 0.5,
					stretchMin: 40,
					stretchMax: 420,
					padStart: 0,
					padEnd: headLength * 0.8,
					flip: flip,
					straights: false,
				}
			);
		} else if (from && to) {
			// Point-to-point mode
			return getArrow(
				from.x - minX, from.y - minY,
				to.x - minX, to.y - minY,
				{
					bow: bow,
					stretch: bow !== 0 ? 0.5 : 0,
					straights: bow === 0,
					padEnd: headLength * 0.8,
					flip: flip,
				}
			);
		}
		return [0, 0, 50, 50, 100, 100, 0, 0, 0];
	});

	const sx = $derived(arrowData()[0]);
	const sy = $derived(arrowData()[1]);
	const cx = $derived(arrowData()[2]);
	const cy = $derived(arrowData()[3]);
	const ex = $derived(arrowData()[4]);
	const ey = $derived(arrowData()[5]);
	const endAngle = $derived(arrowData()[6]);

	const endAngleDegrees = $derived(endAngle * (180 / Math.PI));
	const pathD = $derived(`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`);
	const arrowheadPoints = $derived(`0,${-headWidth} ${headLength},0 0,${headWidth}`);
</script>

<svg 
	class="svg-arrow" 
	width={svgWidth}
	height={svgHeight}
	style="position: absolute; left: {minX}px; top: {minY}px; overflow: visible; pointer-events: none; z-index: {zIndex};"
>
	<path
		d={pathD}
		stroke={strokeColor}
		stroke-width={strokeWidth}
		stroke-dasharray={stroke.dash}
		stroke-linecap="butt"
		fill="none"
	/>
	<polygon
		points={arrowheadPoints}
		fill={strokeColor}
		transform="translate({ex},{ey}) rotate({endAngleDegrees})"
	/>
	{#if startMarker}
		<circle
			cx={sx}
			cy={sy}
			r={startMarker.radius}
			fill={startMarker.fill ?? strokeColor}
		/>
	{/if}
	{#if endMarker}
		<circle
			cx={ex}
			cy={ey}
			r={endMarker.radius}
			fill={endMarker.fill ?? strokeColor}
		/>
	{/if}
</svg>
