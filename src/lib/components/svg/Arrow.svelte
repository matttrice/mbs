<script lang="ts">
	import { getArrow } from 'perfect-arrows';
	import type { StrokeStyle } from './types';

	/**
	 * Arrow: SVG arrow using perfect-arrows library for consistent rendering.
	 * 
	 * Positions itself absolutely on the canvas using the from/to coordinates.
	 * Should be used inside a Fragment WITHOUT a layout prop - Fragment only
	 * provides step-based visibility, Arrow handles its own positioning.
	 * 
	 * @example
	 * <Fragment step={5} animate="wipe">
	 *   <Arrow from={{ x: 100, y: 200 }} to={{ x: 300, y: 150 }} stroke={{ width: 4 }} />
	 * </Fragment>
	 */
	interface Props {
		from: { x: number; y: number };
		to: { x: number; y: number };
		stroke?: StrokeStyle;
		headSize?: number;
		zIndex?: number;
	}

	let { from, to, stroke = {}, headSize = 3, zIndex = 1 }: Props = $props();

	const strokeWidth = $derived(stroke.width ?? 4);
	const strokeColor = $derived(stroke.color ?? 'var(--color-bg-darkest)');

	// Head dimensions based on stroke width
	const headLength = $derived(strokeWidth * headSize);
	const headWidth = $derived(strokeWidth * headSize * 0.6);

	// Calculate bounding box for the SVG
	const minX = $derived(Math.min(from.x, to.x) - headLength * 2);
	const minY = $derived(Math.min(from.y, to.y) - headLength * 2);
	const maxX = $derived(Math.max(from.x, to.x) + headLength * 2);
	const maxY = $derived(Math.max(from.y, to.y) + headLength * 2);
	const svgWidth = $derived(maxX - minX);
	const svgHeight = $derived(maxY - minY);

	// Translate coordinates to SVG-local space
	const localFromX = $derived(from.x - minX);
	const localFromY = $derived(from.y - minY);
	const localToX = $derived(to.x - minX);
	const localToY = $derived(to.y - minY);

	// Get arrow geometry from perfect-arrows (using local coordinates)
	const arrowData = $derived(
		getArrow(localFromX, localFromY, localToX, localToY, {
			bow: 0,
			stretch: 0,
			straights: true,
			padEnd: headLength * 0.8,
		})
	);

	const sx = $derived(arrowData[0]);
	const sy = $derived(arrowData[1]);
	const cx = $derived(arrowData[2]);
	const cy = $derived(arrowData[3]);
	const ex = $derived(arrowData[4]);
	const ey = $derived(arrowData[5]);
	const endAngle = $derived(arrowData[6]);

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
</svg>
