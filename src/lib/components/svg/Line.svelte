<script lang="ts">
	import type { Point, StrokeStyle } from './types';

	/**
	 * Line: SVG line shape without arrowhead.
	 * Positions itself absolutely on the canvas using the from/to coordinates.
	 * Should be used inside a Fragment WITHOUT a layout prop.
	 *
	 * @example Simple line
	 * ```svelte
	 * <Fragment step={17} animate="draw">
	 *   <Line from={{ x: 453, y: 285 }} to={{ x: 547, y: 285 }} stroke={{ width: 3 }} />
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
		/** Z-index for layering */
		zIndex?: number;
	}

	let { from, to, stroke = {}, zIndex = 1 }: Props = $props();

	const strokeWidth = $derived(stroke.width ?? 2);
	const strokeColor = $derived(stroke.color ?? '#000000');

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
</script>

<svg 
	class="svg-line" 
	width={svgWidth}
	height={svgHeight}
	style="position: absolute; left: {minX}px; top: {minY}px; overflow: visible; pointer-events: none; z-index: {zIndex}; --path-length: {length};"
>
	<line
		x1={localFromX}
		y1={localFromY}
		x2={localToX}
		y2={localToY}
		stroke={strokeColor}
		stroke-width={strokeWidth}
		stroke-dasharray={stroke.dash}
		stroke-linecap={stroke.linecap ?? 'butt'}
	/>
</svg>
