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
	import { currentFragment, currentSlide } from '$lib/stores/navigation';
	import { getSlideContext } from './Slide.svelte';
	import { onMount } from 'svelte';
	import { 
		getEffectiveStep, 
		getAnimationDelay, 
		shouldBeVisible, 
		registerStepWithContext,
		getNormalizedStep,
		checkIsActiveSlide,
		wasAlreadyRevealed,
		ANIMATION_COMPLETE_DELAY
	} from './stepUtils';

	/**
	 * FragmentArrow: Animated arrow that integrates with slide fragment system.
	 * 
	 * Combines Fragment step registration with ArrowPath wipe animation.
	 * Direction is automatically inferred from path start/end points.
	 * 
	 * Step numbers support decimal notation for animation sequencing:
	 * - Integer part = click number when arrow becomes visible
	 * - Decimal part = animation delay (e.g., .1 = 500ms, .2 = 1000ms)
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
	 * @example Staggered with other fragments:
	 * ```svelte
	 * <FragmentArrow step={14} ... />
	 * <Fragment step={14.1}>Appears after arrow</Fragment>
	 * ```
	 */
	interface Props {
		/** 
		 * Step number when this arrow becomes visible.
		 * Identical step numbers will appear on the same click.
		 * Use decimals for animation delay: 14.1 = click 14, 500ms delay
		 */
		step: number;
		/** 
		 * Animation delay in milliseconds. Overrides the decimal-based delay calculation.
		 */
		delay?: number;
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
		delay,
		path, 
		line,
		arrowhead = true, 
		headSize = 3,
		duration = 0.5, 
		zIndex = 0
	}: Props = $props();

	// Register this step with the slide context (integer part only)
	const slideContext = getSlideContext();
	registerStepWithContext(step, slideContext);

	// Get normalized step for visibility calculations
	let normalizedStep = $derived(getNormalizedStep(step, slideContext) ?? step);

	// Calculate animation delay from decimal part or explicit delay prop
	const animationDelay = $derived(getAnimationDelay(normalizedStep, delay));

	// Visibility depends on currentFragment using normalized step
	let visible = $derived(shouldBeVisible(normalizedStep, $currentFragment));

	// Check if this arrow's slide is the currently active slide
	let isActiveSlide = $derived(checkIsActiveSlide(slideContext?.slideIndex, $currentSlide));
	
	// ========== ANIMATION LOGIC ==========
	// Same pattern as Fragment.svelte - uses shared utilities from stepUtils
	
	let hasAnimated = $state(false);
	let animationReady = $state(false);
	
	onMount(() => {
		// Check if arrow was already revealed before this mount
		setTimeout(() => {
			const normalized = getNormalizedStep(step, slideContext) ?? step;
			const effectiveStep = getEffectiveStep(normalized);
			hasAnimated = wasAlreadyRevealed(effectiveStep, slideContext?.slideIndex, visible);
			animationReady = true;
		}, 0);
	});
	
	// Determine if we should show animation
	let showAnimation = $derived(animationReady && visible && isActiveSlide && !hasAnimated);
	
	// When animation starts, mark as animated (after animation completes)
	$effect(() => {
		if (showAnimation) {
			const timer = setTimeout(() => {
				hasAnimated = true;
			}, ANIMATION_COMPLETE_DELAY);
			
			return () => clearTimeout(timer);
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
		class:animate={showAnimation}
		class:revealed={animationReady && !showAnimation}
		style={svgStyle}
		style:--duration="{duration}s"
		style:--delay="{animationDelay}ms"
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
		animation: wipeReveal var(--duration) ease-out var(--delay) forwards;
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
