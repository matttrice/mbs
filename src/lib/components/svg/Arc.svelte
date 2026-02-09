<script lang="ts">
	import { dev } from '$app/environment';
	import { SVG, type Container } from '@svgdotjs/svg.js';
	import { onMount, onDestroy } from 'svelte';
	import type { StrokeStyle, Point } from './types';

	/**
	 * Arc: Self-positioning curved arrow/line using SVG arc or quadratic bezier.
	 * Uses canvas coordinates (960×540) and renders its own absolutely-positioned SVG.
	 * Integrates with Fragment's animation system.
	 * 
	 * For arcs that curve OVER content (like timeline self-references), the arc
	 * curves upward. For arcs curving under (loops back below), it curves downward.
	 *
	 * @example Simple arc curving up
	 * ```svelte
	 * <Fragment step={1} animate="draw">
	 *   <Arc from={{ x: 100, y: 400 }} to={{ x: 400, y: 400 }} curve={-100} stroke={{ width: 5 }} />
	 * </Fragment>
	 * ```
	 * 
	 * @example Arc with arrowhead
	 * ```svelte
	 * <Fragment step={2} animate="draw">
	 *   <Arc from={{ x: 200, y: 300 }} to={{ x: 600, y: 300 }} curve={-80} stroke={{ width: 4 }} arrow />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Start point in canvas coordinates (960×540) */
		from: Point;
		/** End point in canvas coordinates (960×540) */
		to: Point;
		/** Curve height: negative = curve up, positive = curve down (perpendicular offset) */
		curve?: number;
		/** Shift the curve peak along the from→to axis (parallel offset). Positive = toward 'to', negative = toward 'from'. Default: 0 */
		shift?: number;
		/** Stroke styling */
		stroke?: StrokeStyle;
		/** Fill color (typically 'none' for arcs) */
		fill?: string;
		/** Show arrowhead at end */
		arrow?: boolean;
		/** Arrow head size multiplier (default: 3) */
		headSize?: number;
		/** Z-index for stacking order */
		zIndex?: number;
	}

	let { from, to, curve = -50, shift = 0, stroke, fill, arrow = false, headSize = 3, zIndex = 1 }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	// Calculate bounding box with padding for the arc
	const padding = $derived(Math.max(Math.abs(curve), Math.abs(shift)) + (stroke?.width ?? 2) * 2 + 20);
	const minX = $derived(Math.min(from.x, to.x) - padding);
	const minY = $derived(Math.min(from.y, to.y) - padding);
	const maxX = $derived(Math.max(from.x, to.x) + padding);
	const maxY = $derived(Math.max(from.y, to.y) + padding);
	const width = $derived(maxX - minX);
	const height = $derived(maxY - minY);

	// Translate points to local SVG coordinates
	const localFrom = $derived({ x: from.x - minX, y: from.y - minY });
	const localTo = $derived({ x: to.x - minX, y: to.y - minY });

	// Calculate control point perpendicular to the line between from and to
	// This centers the curve in the middle of the arc regardless of angle
	const midX = $derived((localFrom.x + localTo.x) / 2);
	const midY = $derived((localFrom.y + localTo.y) / 2);
	
	// Calculate perpendicular direction (rotate line direction by 90 degrees)
	const dx = $derived(localTo.x - localFrom.x);
	const dy = $derived(localTo.y - localFrom.y);
	const lineLength = $derived(Math.sqrt(dx * dx + dy * dy));
	
	// Perpendicular unit vector (rotated 90 degrees counterclockwise)
	const perpX = $derived(-dy / lineLength);
	const perpY = $derived(dx / lineLength);
	
	// Parallel unit vector (along from→to direction)
	const parX = $derived(dx / lineLength);
	const parY = $derived(dy / lineLength);
	
	// Offset control point: curve = perpendicular, shift = parallel to from→to line
	const controlPoint = $derived({ 
		x: midX + perpX * curve + parX * shift, 
		y: midY + perpY * curve + parY * shift 
	});

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;
		draw.viewbox(0, 0, width, height);

		const strokeWidth = stroke?.width ?? 5;
		const strokeColor = stroke?.color ?? '#0000FF';

		// Create quadratic bezier curve path
		const pathData = `M ${localFrom.x},${localFrom.y} Q ${controlPoint.x},${controlPoint.y} ${localTo.x},${localTo.y}`;
		
		const path = draw.path(pathData);
		path.fill(fill ?? 'none');
		path.stroke({
			width: strokeWidth,
			color: strokeColor,
			linecap: stroke?.linecap ?? 'round',
			linejoin: stroke?.linejoin ?? 'round',
			dasharray: stroke?.dash ?? undefined
		});

		// Add arrowhead if requested
		if (arrow) {
			// Calculate arrow direction at endpoint using tangent of bezier at t=1
			// For quadratic bezier: tangent at t=1 is (P2 - P1) where P1 is control, P2 is end
			const tangentX = localTo.x - controlPoint.x;
			const tangentY = localTo.y - controlPoint.y;
			const angle = Math.atan2(tangentY, tangentX);

			// Arrow head dimensions
			const arrowLength = strokeWidth * headSize;
			const arrowAngle = Math.PI / 6; // 30 degrees

			// Calculate arrow head points
			const arrowPoint1 = {
				x: localTo.x - arrowLength * Math.cos(angle - arrowAngle),
				y: localTo.y - arrowLength * Math.sin(angle - arrowAngle)
			};
			const arrowPoint2 = {
				x: localTo.x - arrowLength * Math.cos(angle + arrowAngle),
				y: localTo.y - arrowLength * Math.sin(angle + arrowAngle)
			};

			// Draw arrowhead with class for delayed animation
			const arrowPath = `M ${arrowPoint1.x},${arrowPoint1.y} L ${localTo.x},${localTo.y} L ${arrowPoint2.x},${arrowPoint2.y}`;
			const arrowEl = draw.path(arrowPath);
			arrowEl.fill('none');
			arrowEl.stroke({
				width: strokeWidth,
				color: strokeColor,
				linecap: 'round',
				linejoin: 'round'
			});
			arrowEl.addClass('arc-arrowhead');
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
	class="svg-arc-container"
	style="
		position: absolute;
		left: {minX}px;
		top: {minY}px;
		width: {width}px;
		height: {height}px;
		z-index: {zIndex};
		pointer-events: {dev ? 'auto' : 'none'};
	"
	data-shape-type={dev ? 'arc' : undefined}
	data-coords={dev ? JSON.stringify({ from, to, curve, shift }) : undefined}
>
	<svg
		bind:this={svgEl}
		class="svg-shape svg-arc"
		style="width: 100%; height: 100%; overflow: visible;"
	></svg>
</div>

<style>
	.svg-arc-container {
		overflow: visible;
	}

	.svg-shape {
		display: block;
	}
</style>
