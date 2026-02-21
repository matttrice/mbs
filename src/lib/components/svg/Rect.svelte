<script lang="ts">
	import { dev } from '$app/environment';
	import type { StrokeStyle } from './types';

	/**
	 * Rect: SVG rectangle shape with self-positioning.
	 * 
	 * Positions itself absolutely on the canvas using x/y coordinates.
	 * Should be used inside a Fragment WITHOUT a layout prop - Fragment only
	 * provides step-based visibility, Rect handles its own positioning.
	 *
	 * @example Filled rectangle
	 * ```svelte
	 * <Fragment step={3} animate="wipe-down">
	 *   <Rect x={192} y={0} width={288} height={540} fill="var(--bg-level-2)" zIndex={2} />
	 * </Fragment>
	 * ```
	 *
	 * @example Rounded rectangle with border
	 * ```svelte
	 * <Fragment step={5} animate="fade">
	 *   <Rect x={100} y={100} width={200} height={100} fill="#E8E8E8" stroke={{ width: 2, color: '#000' }} radius={8} />
	 * </Fragment>
	 * ```
	 *
	 * @example Rotated rectangle
	 * ```svelte
	 * <Fragment step={6} animate="fade">
	 *   <Rect x={100} y={100} width={200} height={50} fill="#E8E8E8" rotation={45} />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** X position on canvas (960×540) */
		x: number;
		/** Y position on canvas */
		y: number;
		/** Rectangle width */
		width: number;
		/** Rectangle height */
		height: number;
		/** Fill color */
		fill?: string;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Corner radius for rounded rectangles */
		radius?: number;
		/** Z-index for stacking order */
		zIndex?: number;
		/** Rotation in degrees (rotates around center) */
		rotation?: number;
	}

	let { x, y, width, height, fill, stroke, radius = 0, zIndex = 1, rotation = 0 }: Props = $props();

	const strokeWidth = $derived(stroke?.width ?? 0);
	const strokeColor = $derived(stroke?.color ?? 'var(--stroke-level-0)');
	const fillColor = $derived(fill ?? 'none');

	// Calculate perimeter for draw animation
	const perimeter = $derived(2 * (width + height));

	// Calculate center point for rotation
	const centerX = $derived(width / 2);
	const centerY = $derived(height / 2);
</script>

<svg
	class="svg-rect"
	width={width}
	height={height}
	style="position: absolute; left: {x}px; top: {y}px; overflow: visible; pointer-events: {dev ? 'auto' : 'none'}; z-index: {zIndex}; --path-length: {perimeter};{rotation !== 0 ? ` transform: rotate(${rotation}deg); transform-origin: center center;` : ''}"
	data-shape-type={dev ? 'rect' : undefined}
	data-coords={dev ? JSON.stringify({ x, y, width, height, rotation: rotation !== 0 ? rotation : undefined }) : undefined}
>
	<rect
		x={strokeWidth / 2}
		y={strokeWidth / 2}
		width={width - strokeWidth}
		height={height - strokeWidth}
		fill={fillColor}
		stroke={strokeWidth > 0 ? strokeColor : 'none'}
		stroke-width={strokeWidth}
		stroke-dasharray={stroke?.dash}
		rx={radius}
		ry={radius}
	/>
</svg>
