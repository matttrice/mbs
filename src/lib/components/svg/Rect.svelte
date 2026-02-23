<script lang="ts">
	import { dev } from '$app/environment';
	import type { BaseSvgProps, StrokeSegmentStyle, StrokeLineCap, RectStrokeStyle } from './types';
	import { hasRectSideStroke, resolveRectStrokeSide } from './types';

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
	interface Props extends BaseSvgProps<RectStrokeStyle> {
		/** X position on canvas (960×540) */
		x: number;
		/** Y position on canvas */
		y: number;
		/** Rectangle width */
		width: number;
		/** Rectangle height */
		height: number;
		/** Corner radius for rounded rectangles */
		radius?: number;
		/** Rotation in degrees (rotates around center) */
		rotation?: number;
	}

	let { x, y, width, height, fill, stroke, radius = 0, zIndex = 1, rotation = 0 }: Props = $props();

	const hasPerSide = $derived(hasRectSideStroke(stroke));
	const uniformStroke = $derived(stroke);
	const topStroke = $derived(resolveRectStrokeSide(stroke, 'top'));
	const rightStroke = $derived(resolveRectStrokeSide(stroke, 'right'));
	const bottomStroke = $derived(resolveRectStrokeSide(stroke, 'bottom'));
	const leftStroke = $derived(resolveRectStrokeSide(stroke, 'left'));

	const strokeWidth = $derived(uniformStroke?.width ?? 0);
	const strokeColor = $derived(uniformStroke?.color ?? 'var(--stroke-level-0)');
	const fillColor = $derived(fill ?? 'none');

	// Calculate perimeter for draw animation
	const perimeter = $derived(2 * (width + height));

	// Calculate center point for rotation
	const centerX = $derived(width / 2);
	const centerY = $derived(height / 2);

	function strokeLineCap(edgeStroke?: StrokeSegmentStyle): StrokeLineCap {
		return edgeStroke?.linecap ?? 'butt';
	}

	function strokeDash(edgeStroke?: StrokeSegmentStyle): string | undefined {
		return edgeStroke?.dash;
	}

	function strokeColorFor(edgeStroke?: StrokeSegmentStyle): string {
		return edgeStroke?.color ?? 'var(--stroke-level-0)';
	}

	function strokeWidthFor(edgeStroke?: StrokeSegmentStyle): number {
		return edgeStroke?.width ?? 0;
	}
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
		stroke={!hasPerSide && strokeWidth > 0 ? strokeColor : 'none'}
		stroke-width={!hasPerSide ? strokeWidth : 0}
		stroke-dasharray={!hasPerSide ? uniformStroke?.dash : undefined}
		stroke-linecap={!hasPerSide ? uniformStroke?.linecap ?? 'butt' : undefined}
		stroke-linejoin={!hasPerSide ? uniformStroke?.linejoin ?? 'miter' : undefined}
		rx={radius}
		ry={radius}
	/>
	{#if hasPerSide}
		{#if strokeWidthFor(topStroke) > 0}
			<line
				x1={strokeWidthFor(leftStroke) / 2}
				y1={strokeWidthFor(topStroke) / 2}
				x2={width - strokeWidthFor(rightStroke) / 2}
				y2={strokeWidthFor(topStroke) / 2}
				stroke={strokeColorFor(topStroke)}
				stroke-width={strokeWidthFor(topStroke)}
				stroke-dasharray={strokeDash(topStroke)}
				stroke-linecap={strokeLineCap(topStroke)}
			/>
		{/if}
		{#if strokeWidthFor(rightStroke) > 0}
			<line
				x1={width - strokeWidthFor(rightStroke) / 2}
				y1={strokeWidthFor(topStroke) / 2}
				x2={width - strokeWidthFor(rightStroke) / 2}
				y2={height - strokeWidthFor(bottomStroke) / 2}
				stroke={strokeColorFor(rightStroke)}
				stroke-width={strokeWidthFor(rightStroke)}
				stroke-dasharray={strokeDash(rightStroke)}
				stroke-linecap={strokeLineCap(rightStroke)}
			/>
		{/if}
		{#if strokeWidthFor(bottomStroke) > 0}
			<line
				x1={width - strokeWidthFor(rightStroke) / 2}
				y1={height - strokeWidthFor(bottomStroke) / 2}
				x2={strokeWidthFor(leftStroke) / 2}
				y2={height - strokeWidthFor(bottomStroke) / 2}
				stroke={strokeColorFor(bottomStroke)}
				stroke-width={strokeWidthFor(bottomStroke)}
				stroke-dasharray={strokeDash(bottomStroke)}
				stroke-linecap={strokeLineCap(bottomStroke)}
			/>
		{/if}
		{#if strokeWidthFor(leftStroke) > 0}
			<line
				x1={strokeWidthFor(leftStroke) / 2}
				y1={height - strokeWidthFor(bottomStroke) / 2}
				x2={strokeWidthFor(leftStroke) / 2}
				y2={strokeWidthFor(topStroke) / 2}
				stroke={strokeColorFor(leftStroke)}
				stroke-width={strokeWidthFor(leftStroke)}
				stroke-dasharray={strokeDash(leftStroke)}
				stroke-linecap={strokeLineCap(leftStroke)}
			/>
		{/if}
	{/if}
</svg>
