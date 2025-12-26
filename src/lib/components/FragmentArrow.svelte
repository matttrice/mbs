<script lang="ts" module>
	/**
	 * Path endpoints - direction is inferred from these
	 */
	export interface ArrowPathPoints {
		start: { x: number; y: number };
		end: { x: number; y: number };
	}

	/**
	 * Line styling
	 */
	export interface ArrowLineStyle {
		color?: string;
		/** Thickness of the arrow shaft in pixels */
		width?: number;
	}
</script>

<script lang="ts">
	import { currentFragment } from '$lib/stores/navigation';
	import { getSlideContext } from './Slide.svelte';

	/**
	 * FragmentArrow: Animated arrow that integrates with slide fragment system.
	 * 
	 * Combines Fragment step registration with ArrowPath wipe animation.
	 * Direction is automatically inferred from path start/end points.
	 * 
	 * @example Horizontal arrow (right):
	 * ```svelte
	 * <FragmentArrow 
	 *   step={15}
	 *   path={{ start: { x: 100, y: 200 }, end: { x: 400, y: 200 } }}
	 *   line={{ width: 20 }}
	 * />
	 * ```
	 * 
	 * @example Vertical arrow (down):
	 * ```svelte
	 * <FragmentArrow 
	 *   step={5}
	 *   path={{ start: { x: 250, y: 100 }, end: { x: 250, y: 200 } }}
	 *   line={{ width: 30 }}
	 * />
	 * ```
	 */
	interface Props {
		/** Step number (1-indexed) when this arrow becomes visible */
		step: number;
		/** Appear with the previous step */
		withPrev?: boolean;
		/** Start and end points - direction is inferred */
		path: ArrowPathPoints;
		/** Line/arrow styling */
		line?: ArrowLineStyle;
		/** Show arrowhead at end point (default: true) */
		arrowhead?: boolean;
		/** Size of arrowhead relative to width (default: 1.5) */
		headSize?: number;
		/** Animation duration in seconds (default: 0.5) */
		duration?: number;
		/** Z-index for layering */
		zIndex?: number;
	}

	let { 
		step,
		withPrev = false,
		path, 
		line,
		arrowhead = true, 
		headSize = 1.5,
		duration = 0.5, 
		zIndex = 0
	}: Props = $props();

	// Register this step with the slide context
	const slideContext = getSlideContext();
	if (slideContext) {
		slideContext.registerStep(step);
	}

	// withPrev appears with the previous step
	const effectiveStep = withPrev ? step - 1 : step;

	// Visibility depends on currentFragment
	let visible = $derived($currentFragment >= effectiveStep);
	
	// Check if arrow was already visible on mount (returning from drill)
	// In that case, skip animation and show fully revealed
	// Capture initial fragment value at mount time
	const initialFragment = $currentFragment;
	const wasVisibleOnMount = initialFragment >= effectiveStep;
	
	// Track animation state
	let shouldAnimate = $state(false);
	
	$effect(() => {
		if (visible && !wasVisibleOnMount && !shouldAnimate) {
			// Only animate if becoming visible for the first time during this session
			requestAnimationFrame(() => {
				shouldAnimate = true;
			});
		}
	});

	// Styling
	const color = $derived(line?.color ?? '#000000');
	const thickness = $derived(line?.width ?? 8);

	// Calculate dimensions and positioning
	const dx = $derived(path.end.x - path.start.x);
	const dy = $derived(path.end.y - path.start.y);
	const length = $derived(Math.sqrt(dx * dx + dy * dy));
	const angle = $derived(Math.atan2(dy, dx) * 180 / Math.PI);

	// Arrow head size based on thickness
	const headLength = $derived(arrowhead ? thickness * headSize : 0);
	const headWidth = $derived(thickness * 2);
	const shaftLength = $derived(length - headLength);

	// SVG viewBox dimensions
	const viewWidth = $derived(length);
	const viewHeight = $derived(headWidth);

	// Build the arrow polygon points (horizontal arrow pointing right)
	const arrowPoints = $derived(() => {
		const hw = headWidth;
		const ht = thickness;
		const sl = shaftLength;
		const cy = hw / 2;
		const shaftTop = cy - ht / 2;
		const shaftBottom = cy + ht / 2;

		if (arrowhead) {
			return `0,${shaftTop} ${sl},${shaftTop} ${sl},0 ${length},${cy} ${sl},${hw} ${sl},${shaftBottom} 0,${shaftBottom}`;
		} else {
			return `0,${shaftTop} ${length},${shaftTop} ${length},${shaftBottom} 0,${shaftBottom}`;
		}
	});

	// Position: place SVG at start point, rotated toward end
	const svgStyle = $derived(
		`left: ${path.start.x}px; ` +
		`top: ${path.start.y - headWidth / 2}px; ` +
		`width: ${length}px; ` +
		`height: ${headWidth}px; ` +
		`transform-origin: 0 ${headWidth / 2}px; ` +
		`transform: rotate(${angle}deg); ` +
		`z-index: ${zIndex};`
	);
</script>

{#if visible}
	<svg
		class="fragment-arrow"
		class:animate={shouldAnimate}
		class:revealed={wasVisibleOnMount}
		style={svgStyle}
		style:--duration="{duration}s"
		viewBox="0 0 {viewWidth} {viewHeight}"
		preserveAspectRatio="none"
	>
		<polygon 
			points={arrowPoints()}
			fill={color}
		/>
	</svg>
{/if}

<style>
	.fragment-arrow {
		position: absolute;
		pointer-events: none;
		overflow: visible;
	}

	.fragment-arrow polygon {
		clip-path: inset(0 100% 0 0);
	}

	/* Already visible on mount - show fully revealed without animation */
	.fragment-arrow.revealed polygon {
		clip-path: inset(0 0 0 0);
	}

	/* Animate when becoming visible for the first time */
	.fragment-arrow.animate polygon {
		animation: wipeReveal var(--duration) ease-out forwards;
	}

	@keyframes wipeReveal {
		from {
			clip-path: inset(0 100% 0 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}
</style>
