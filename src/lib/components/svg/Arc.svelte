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
	 * Two rendering modes:
	 * - **Quadratic bezier** (default): Single control point offset by `curve`/`shift`.
	 *   Good for simple curved connectors between nearby points.
	 * - **SVG elliptical arc** (`largeArc={true}`): Uses SVG `A` command to draw
	 *   circular/elliptical arcs that can subtend up to 359°. Essential for
	 *   near-complete circles where from/to are close together.
	 *
	 * @example Simple arc curving up (quadratic bezier mode)
	 * ```svelte
	 * <Fragment step={1} animate="draw">
	 *   <Arc from={{ x: 100, y: 400 }} to={{ x: 400, y: 400 }} curve={-100} stroke={{ width: 5 }} />
	 * </Fragment>
	 * ```
	 * 
	 * @example Near-complete circle (SVG arc mode)
	 * ```svelte
	 * <Fragment step={2} animate="draw">
	 *   <Arc from={{ x: 100, y: 370 }} to={{ x: 100, y: 420 }} rx={20} ry={57} largeArc
	 *     stroke={{ width: 8, color: 'var(--stroke-level-3)' }} arrow />
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Start point in canvas coordinates (960×540) */
		from: Point;
		/** End point in canvas coordinates (960×540) */
		to: Point;
		/** Curve height: negative = curve left/up, positive = curve right/down (perpendicular offset).
		 *  In largeArc mode: sign controls sweep direction (negative = counterclockwise, positive = clockwise).
		 *  When rx/ry are not provided in largeArc mode, |curve| is used as sagitta to compute radius. */
		curve?: number;
		/** Shift the curve peak along the from→to axis (parallel offset). Only used in quadratic bezier mode. */
		shift?: number;
		/** Use SVG elliptical arc (A command) instead of quadratic bezier. Enables near-complete circles/ellipses. */
		largeArc?: boolean;
		/** X-radius for elliptical arc (largeArc mode). If omitted, computed from curve or defaults to ry. */
		rx?: number;
		/** Y-radius for elliptical arc (largeArc mode). If omitted, defaults to rx (circular). */
		ry?: number;
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

	let { from, to, curve = -50, shift = 0, largeArc = false, rx: rxProp, ry: ryProp, stroke, fill, arrow = false, headSize = 3, zIndex = 1 }: Props = $props();

	let svgEl: SVGSVGElement;
	let draw: Container | null = null;

	// --- Shared geometry ---
	const globalDx = $derived(to.x - from.x);
	const globalDy = $derived(to.y - from.y);
	const chordLength = $derived(Math.sqrt(globalDx * globalDx + globalDy * globalDy));

	// Perpendicular unit vector (rotated 90 degrees counterclockwise from from→to)
	const globalPerpX = $derived(chordLength > 0 ? -globalDy / chordLength : -1);
	const globalPerpY = $derived(chordLength > 0 ? globalDx / chordLength : 0);

	// --- SVG elliptical arc geometry (largeArc mode) ---
	// Compute effective rx/ry for the SVG A command
	const effectiveRx = $derived.by(() => {
		if (!largeArc) return 0;
		if (rxProp !== undefined) return rxProp;
		if (ryProp !== undefined) return ryProp; // circular: default to ry
		// Compute from curve using sagitta formula: r = (d² + 4h²) / (8|h|)
		const h = Math.abs(curve);
		if (h === 0) return chordLength / 2;
		return (chordLength * chordLength + 4 * h * h) / (8 * h);
	});
	const effectiveRy = $derived.by(() => {
		if (!largeArc) return 0;
		if (ryProp !== undefined) return ryProp;
		if (rxProp !== undefined) return rxProp; // circular: default to rx
		return effectiveRx; // same as rx when computed from curve
	});

	// SVG A command flags
	// large-arc-flag: 1 = take the long way around (> 180°)
	// For the sagitta-computed case: large when |curve| > chord/2
	// For explicit rx/ry: always 1 (the user explicitly wants the large arc)
	const svgLargeArcFlag = $derived.by(() => {
		if (!largeArc) return 0;
		if (rxProp !== undefined || ryProp !== undefined) return 1;
		return Math.abs(curve) > chordLength / 2 ? 1 : 0;
	});

	// sweep-flag: determines CW vs CCW direction
	// We use the sign of curve: negative curve = arc on the "left" side (CCW in screen coords = sweep 0)
	// positive curve = arc on the "right" side (CW in screen coords = sweep 1)
	const svgSweepFlag = $derived(curve >= 0 ? 1 : 0);

	// Compute arc center for arrowhead tangent calculation and bounding box
	// Using W3C SVG spec F.6.5 conversion from endpoint to center parameterization
	const arcCenter = $derived.by(() => {
		if (!largeArc) return { cx: 0, cy: 0, theta1: 0, dtheta: 0 };
		const rx = effectiveRx;
		const ry = effectiveRy;
		if (rx === 0 || ry === 0) return { cx: 0, cy: 0, theta1: 0, dtheta: 0 };

		// F.6.5: Compute center from endpoints
		const x1 = from.x, y1 = from.y, x2 = to.x, y2 = to.y;
		// x-axis rotation = 0 for our arcs, so cos/sin = 1/0
		const mx = (x1 - x2) / 2;
		const my = (y1 - y2) / 2;
		// x1', y1' (rotated midpoint delta) — no rotation so same as mx, my
		const x1p = mx;
		const y1p = my;

		// F.6.5.2: Compute center' 
		const rx2 = rx * rx;
		const ry2 = ry * ry;
		const x1p2 = x1p * x1p;
		const y1p2 = y1p * y1p;

		let num = rx2 * ry2 - rx2 * y1p2 - ry2 * x1p2;
		let den = rx2 * y1p2 + ry2 * x1p2;
		if (den === 0) return { cx: (x1 + x2) / 2, cy: (y1 + y2) / 2, theta1: 0, dtheta: 0 };
		
		// Clamp to avoid sqrt of negative due to floating point
		let sq = Math.max(0, num / den);
		let root = Math.sqrt(sq);
		// Sign: positive when largeArcFlag !== sweepFlag
		if (svgLargeArcFlag === svgSweepFlag) root = -root;

		const cxp = root * rx * y1p / ry;
		const cyp = -root * ry * x1p / rx;

		// F.6.5.3: center in original coords
		const cx = cxp + (x1 + x2) / 2;
		const cy = cyp + (y1 + y2) / 2;

		// F.6.5.5/6: Compute theta1 and dtheta
		const theta1 = Math.atan2((y1p - cyp) / ry, (x1p - cxp) / rx);
		const theta2 = Math.atan2((-y1p - cyp) / ry, (-x1p - cxp) / rx);
		let dtheta = theta2 - theta1;
		// Adjust based on sweep flag
		if (svgSweepFlag === 0 && dtheta > 0) dtheta -= 2 * Math.PI;
		if (svgSweepFlag === 1 && dtheta < 0) dtheta += 2 * Math.PI;

		return { cx, cy, theta1, dtheta };
	});

	// --- Bounding box ---
	const padding = $derived((stroke?.width ?? 2) * 2 + 20);
	
	const arcBounds = $derived.by(() => {
		if (largeArc && effectiveRx > 0 && effectiveRy > 0) {
			// For elliptical arc: bound by arc center ± radii (conservative)
			const { cx, cy } = arcCenter;
			const maxR = Math.max(effectiveRx, effectiveRy);
			return {
				minX: cx - maxR - padding,
				minY: cy - maxR - padding,
				maxX: cx + maxR + padding,
				maxY: cy + maxR + padding
			};
		} else {
			// Quadratic bezier mode: use control point extent
			const qPadding = Math.max(Math.abs(curve), Math.abs(shift)) + padding;
			return {
				minX: Math.min(from.x, to.x) - qPadding,
				minY: Math.min(from.y, to.y) - qPadding,
				maxX: Math.max(from.x, to.x) + qPadding,
				maxY: Math.max(from.y, to.y) + qPadding
			};
		}
	});

	const minX = $derived(arcBounds.minX);
	const minY = $derived(arcBounds.minY);
	const maxX = $derived(arcBounds.maxX);
	const maxY = $derived(arcBounds.maxY);
	const width = $derived(maxX - minX);
	const height = $derived(maxY - minY);

	// Translate points to local SVG coordinates
	const localFrom = $derived({ x: from.x - minX, y: from.y - minY });
	const localTo = $derived({ x: to.x - minX, y: to.y - minY });

	// --- Quadratic bezier control point (non-largeArc mode) ---
	const midX = $derived((localFrom.x + localTo.x) / 2);
	const midY = $derived((localFrom.y + localTo.y) / 2);
	const dx = $derived(localTo.x - localFrom.x);
	const dy = $derived(localTo.y - localFrom.y);
	const lineLength = $derived(Math.sqrt(dx * dx + dy * dy));
	const perpX = $derived(lineLength > 0 ? -dy / lineLength : -1);
	const perpY = $derived(lineLength > 0 ? dx / lineLength : 0);
	const parX = $derived(lineLength > 0 ? dx / lineLength : 0);
	const parY = $derived(lineLength > 0 ? dy / lineLength : 1);
	const controlPoint = $derived({ 
		x: midX + perpX * curve + parX * shift, 
		y: midY + perpY * curve + parY * shift 
	});

	onMount(() => {
		if (!svgEl) return;

		draw = SVG(svgEl) as Container;
		draw.viewbox(0, 0, width, height);

		const strokeWidth = stroke?.width ?? 5;
		const strokeColor = stroke?.color ?? 'var(--stroke-level-3)';

		let pathData: string;
		let arrowAngleAtEnd: number;

		if (largeArc && effectiveRx > 0 && effectiveRy > 0) {
			// SVG elliptical arc (A command) mode
			pathData = `M ${localFrom.x},${localFrom.y} A ${effectiveRx} ${effectiveRy} 0 ${svgLargeArcFlag} ${svgSweepFlag} ${localTo.x},${localTo.y}`;

			// Arrowhead tangent: perpendicular to radius at endpoint
			// Tangent at endpoint on ellipse: derivative of parametric form
			const { cx, cy, theta1, dtheta } = arcCenter;
			const localCx = cx - minX;
			const localCy = cy - minY;
			const endAngle = theta1 + dtheta;
			// Tangent direction on ellipse at angle theta: (-rx*sin(theta), ry*cos(theta))
			// Adjusted for sweep direction
			const tx = -effectiveRx * Math.sin(endAngle);
			const ty = effectiveRy * Math.cos(endAngle);
			// For sweep=0 (CCW), tangent points in negative direction
			if (svgSweepFlag === 0) {
				arrowAngleAtEnd = Math.atan2(-ty, -tx);
			} else {
				arrowAngleAtEnd = Math.atan2(ty, tx);
			}
		} else {
			// Quadratic bezier mode (original behavior)
			pathData = `M ${localFrom.x},${localFrom.y} Q ${controlPoint.x},${controlPoint.y} ${localTo.x},${localTo.y}`;
			// Tangent at t=1 for quadratic bezier: direction from control point to endpoint
			arrowAngleAtEnd = Math.atan2(localTo.y - controlPoint.y, localTo.x - controlPoint.x);
		}

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
			const angle = arrowAngleAtEnd;
			const arrowLength = strokeWidth * headSize;
			const arrowAngle = Math.PI / 6; // 30 degrees

			const arrowPoint1 = {
				x: localTo.x - arrowLength * Math.cos(angle - arrowAngle),
				y: localTo.y - arrowLength * Math.sin(angle - arrowAngle)
			};
			const arrowPoint2 = {
				x: localTo.x - arrowLength * Math.cos(angle + arrowAngle),
				y: localTo.y - arrowLength * Math.sin(angle + arrowAngle)
			};

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
	data-coords={dev ? JSON.stringify({ from, to, curve, shift, ...(largeArc ? { largeArc, rx: effectiveRx, ry: effectiveRy } : {}) }) : undefined}
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
