<script lang="ts">
	import { currentFragment, currentSlide, navigation } from '$lib/stores/navigation';
	import { getSlideContext } from './Slide.svelte';
	import { getCustomShowContext } from './CustomShowProvider.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import type { BoxLayout, BoxFont, BoxLine, AnimationType, Keyframe, TransitionConfig } from '$lib/types';
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
	 * Fragment: The unified component for all slide content.
	 * Handles visibility, positioning, styling, and drill navigation.
	 *
	 * Every element on a slide is a Fragment - whether static or animated.
	 *
	 * Step numbers support decimal notation for animation sequencing:
	 * - Integer part = click number when content becomes visible
	 * - Decimal part = animation delay (e.g., .1 = 500ms, .2 = 1000ms)
	 *
	 * @example Static positioned content (always visible):
	 * ```svelte
	 * <Fragment layout={{ x: 321, y: 3, width: 316, height: 42 }} font={{ font_size: 43 }}>
	 *   The Promises
	 * </Fragment>
	 * ```
	 *
	 * @example Animated positioned content with drill:
	 * ```svelte
	 * <Fragment 
	 *   step={1} 
	 *   drillTo="promises/genesis-12-1"
	 *   layout={{ x: 59, y: 9, width: 259, height: 36 }}
	 *   font={{ font_size: 33.6, bold: true }}
	 *   animate="fade"
	 * >
	 *   Genesis 12:1-3
	 * </Fragment>
	 * ```
	 *
	 * @example Multiple items on same click with staggered animation:
	 * ```svelte
	 * <Fragment step={14}>Arrow appears first</Fragment>
	 * <Fragment step={14.1}>Box appears 500ms later</Fragment>
	 * <Fragment step={14.2}>Text appears 1000ms later</Fragment>
	 * ```
	 */
	interface Props {
		/** 
		 * Step number when this content becomes visible. Omit for always-visible content.
		 * Identical step numbers will appear on the same click.
		 * Use decimals for animation delay: 14.1 = click 14, 500ms delay
		 */
		step?: number;
		/**
		 * Step number when this content should disappear.
		 * Content will be hidden when currentFragment >= exitStep.
		 */
		exitStep?: number;
		/** 
		 * Animation delay in milliseconds. Overrides the decimal-based delay calculation.
		 */
		delay?: number;
		/**
		 * Route to drill into when clicked (e.g., `"promises/genesis-12-1"`).
		 * Also enables auto-drill: if this is the last fragment and → is pressed,
		 * navigation automatically drills into this route.
		 */
		drillTo?: string;
		/**
		 * If true, the drilled content returns here (to this drill),
		 * instead of all the way back to the origin presentation.
		 * Use for nested drills that should return to their caller.
		 */
		returnHere?: boolean;
		/** Position and dimensions for absolute placement within the slide canvas. */
		layout?: BoxLayout;
		/** Font styling (size, weight, color, alignment). */
		font?: BoxFont;
		/** Background fill color. */
		fill?: string;
		/** Border styling. */
		line?: BoxLine;
		/** Z-index for layering. */
		zIndex?: number;
		/** Entrance animation when fragment becomes visible. */
		animate?: AnimationType;
		/**
		 * Keyframes for step-based motion animation.
		 * Each keyframe defines property values at a specific step.
		 * Fragment interpolates between keyframes when step changes.
		 */
		keyframes?: Keyframe[];
		/**
		 * Transition configuration for keyframe animations.
		 */
		transition?: TransitionConfig;
		children: import('svelte').Snippet;
	}

	let {
		step,
		exitStep,
		delay,
		drillTo,
		returnHere = false,
		layout,
		font,
		fill,
		line,
		zIndex = 0,
		animate = 'fade',
		keyframes,
		transition,
		children
	}: Props = $props();

	// Register this step with the slide context (integer part only)
	const slideContext = getSlideContext();
	registerStepWithContext(step, slideContext);

	// Check for CustomShowContext to calculate local fragment offset
	const customShowContext = getCustomShowContext();

	// Get normalized step for visibility and drill registration
	// This maps author steps with gaps to consecutive integers
	let normalizedStep = $derived(getNormalizedStep(step, slideContext));
	
	// Track drill registration state
	let registeredNormalizedStep: number | undefined = undefined;
	let registeredSlideIndex: number = 0;

	onDestroy(() => {
		if (registeredNormalizedStep !== undefined) {
			navigation.unregisterDrillTarget(registeredSlideIndex, registeredNormalizedStep);
		}
	});

	// Calculate animation delay from decimal part or explicit delay prop
	let animationDelay = $derived(
		normalizedStep !== undefined ? getAnimationDelay(normalizedStep, delay) : 0
	);

	// Get the effective fragment position for visibility calculations
	// In CustomShowProvider: use local fragment (global - offset for this slide)
	// Otherwise: use global fragment directly
	let effectiveFragment = $derived(() => {
		if (customShowContext && slideContext?.slideIndex !== undefined) {
			return customShowContext.getLocalFragment(slideContext.slideIndex, $currentFragment);
		}
		return $currentFragment;
	});

	// Always visible if no step defined, otherwise visibility depends on currentFragment
	// Also check exitStep - hide if we've reached it
	let visible = $derived(() => {
		const fragment = effectiveFragment();
		const stepVisible = shouldBeVisible(normalizedStep, fragment);
		if (!stepVisible) return false;
		if (exitStep !== undefined) {
			const normalizedExit = getNormalizedStep(exitStep, slideContext);
			if (normalizedExit !== undefined && fragment >= normalizedExit) {
				return false;
			}
		}
		return true;
	});

	// Check if this fragment's slide is the currently active slide
	// In CustomShowProvider: use custom show's currentSlideIndex
	// Otherwise: use global currentSlide from navigation
	let isActiveSlide = $derived(() => {
		if (customShowContext && slideContext?.slideIndex !== undefined) {
			return customShowContext.currentSlideIndex === slideContext.slideIndex;
		}
		return checkIsActiveSlide(slideContext?.slideIndex, $currentSlide);
	});

	// ========== KEYFRAME MOTION ==========
	//
	// When keyframes are provided, interpolate position/opacity between them
	// based on the current fragment step.

	const transitionDuration = transition?.duration ?? 300;
	const transitionEasing = transition?.easing ?? 'ease-out';

	// Tweened values for smooth interpolation
	const tweenedX = tweened(0, { duration: transitionDuration, easing: cubicOut });
	const tweenedY = tweened(0, { duration: transitionDuration, easing: cubicOut });
	const tweenedWidth = tweened(0, { duration: transitionDuration, easing: cubicOut });
	const tweenedHeight = tweened(0, { duration: transitionDuration, easing: cubicOut });
	const tweenedRotation = tweened(0, { duration: transitionDuration, easing: cubicOut });
	const tweenedOpacity = tweened(1, { duration: transitionDuration, easing: cubicOut });

	// Find the active keyframe based on current fragment
	$effect(() => {
		if (!keyframes || keyframes.length === 0) return;

		// Find the keyframe that applies at current step
		// Use the last keyframe whose step <= currentFragment
		const sortedKeyframes = [...keyframes].sort((a, b) => a.step - b.step);
		let activeKeyframe: Keyframe | undefined;

		for (const kf of sortedKeyframes) {
			const normalizedKfStep = getNormalizedStep(kf.step, slideContext);
			if (normalizedKfStep !== undefined && $currentFragment >= normalizedKfStep) {
				activeKeyframe = kf;
			}
		}

		if (activeKeyframe) {
			if (activeKeyframe.x !== undefined) tweenedX.set(activeKeyframe.x);
			if (activeKeyframe.y !== undefined) tweenedY.set(activeKeyframe.y);
			if (activeKeyframe.width !== undefined) tweenedWidth.set(activeKeyframe.width);
			if (activeKeyframe.height !== undefined) tweenedHeight.set(activeKeyframe.height);
			if (activeKeyframe.rotation !== undefined) tweenedRotation.set(activeKeyframe.rotation);
			if (activeKeyframe.opacity !== undefined) tweenedOpacity.set(activeKeyframe.opacity);
		}
	});

	// ========== ANIMATION LOGIC ==========
	// 
	// A fragment animates exactly ONCE - the first time it becomes visible.
	// After that, it stays visible without animation (drill return, slide nav, page reload).
	//
	// Two states:
	// - hasAnimated: Once true, never animate again (per component instance)
	// - animationReady: True after mount check completes (handles step normalization timing)

	let hasAnimated = $state(false);
	let animationReady = $state(false);
	
	onMount(() => {
		// Handle drill registration (needs setTimeout for step normalization)
		if (drillTo && step !== undefined) {
			setTimeout(() => {
				const normalized = getNormalizedStep(step, slideContext);
				if (normalized !== undefined) {
					const effectiveNormalized = getEffectiveStep(normalized);
					// Use slideIndex for slide-aware drill target registration (0 for drills)
					const slideIdx = slideContext?.slideIndex ?? 0;
					navigation.registerDrillTarget(slideIdx, effectiveNormalized, drillTo, returnHere);
					registeredNormalizedStep = effectiveNormalized;
					registeredSlideIndex = slideIdx;
				}
			}, 0);
		}
		
		// Check if fragment was already revealed before this mount
		setTimeout(() => {
			if (step !== undefined) {
				const normalized = getNormalizedStep(step, slideContext) ?? step;
				const effectiveStep = getEffectiveStep(normalized);
				hasAnimated = wasAlreadyRevealed(effectiveStep, slideContext?.slideIndex, visible());
			} else {
				// Static content (no step) - never animate
				hasAnimated = true;
			}
			animationReady = true;
		}, 0);
	});
	
	// Determine if we should show animation classes
	// Animate if: ready, visible, on active slide, not yet animated
	let showAnimation = $derived(animationReady && visible() && isActiveSlide() && !hasAnimated);
	
	// When animation starts, mark as animated (after animation delay + duration completes)
	$effect(() => {
		if (showAnimation) {
			// Wait for animation delay + animation duration before marking complete
			// This prevents the .revealed class from overriding in-progress animations
			const totalAnimationTime = animationDelay + ANIMATION_COMPLETE_DELAY;
			const timer = setTimeout(() => {
				hasAnimated = true;
			}, totalAnimationTime);
			
			return () => clearTimeout(timer);
		}
	});
	
	// Reset hasAnimated when fragment becomes invisible (e.g., stepping backwards)
	// This allows the animation to replay when stepping forward again
	// Note: This doesn't affect drill returns because the fragment stays visible during drills
	$effect(() => {
		if (animationReady && !visible()) {
			hasAnimated = false;
		}
	});
	const computedStyle = $derived(() => {
		if (!layout) return '';

		// Base position from layout, adjusted by keyframe tweens
		const x = layout.x + $tweenedX;
		const y = layout.y + $tweenedY;
		const width = layout.width + $tweenedWidth;
		const height = layout.height + $tweenedHeight;

		let style = `
			position: absolute;
			left: ${x}px;
			top: ${y}px;
			width: ${width}px;
			height: ${height}px;
			z-index: ${zIndex};
		`;

		// Combine rotation from layout and keyframe
		const rotation = (layout.rotation ?? 0) + $tweenedRotation;
		if (rotation !== 0) {
			style += `transform: rotate(${rotation}deg);`;
		}

		// Apply keyframe opacity
		if ($tweenedOpacity !== 1) {
			style += `opacity: ${$tweenedOpacity};`;
		}

		// Flex alignment - defaults to center/center, can be overridden by font properties
		const hAlign = font?.align ?? 'center';
		const vAlign = font?.v_align ?? 'middle';
		
		// Map alignment values to flex properties
		const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
		const alignMap = { top: 'flex-start', middle: 'center', bottom: 'flex-end' };
		
		// Use align-content for vertical alignment (works with flex-wrap)
		style += `justify-content: ${justifyMap[hAlign]};`;
		style += `align-content: ${alignMap[vAlign]};`;
		style += `align-items: ${alignMap[vAlign]};`;
		
		// Text wrapping
		if (font?.wrap) {
			style += 'flex-wrap: wrap; white-space: normal; word-wrap: break-word;';
		} else {
			style += 'white-space: nowrap;';
		}

		// Font styles
		if (font) {
			if (font.font_size) style += `font-size: ${font.font_size}px;`;
			if (font.bold) style += 'font-weight: bold;';
			if (font.italic) style += 'font-style: italic;';
			if (font.color) style += `color: ${font.color};`;
			if (font.font_name) style += `font-family: "${font.font_name}", sans-serif;`;
			if (font.align) style += `text-align: ${font.align};`;
		}

		// Fill
		if (fill) {
			style += `background-color: ${fill};`;
		}

		// Border
		if (line && line.color) {
			style += `border-color: ${line.color};`;
			if (line.width !== undefined) {
				if (Array.isArray(line.width)) {
					// 4-tuple: [top, right, bottom, left]
					const [top, right, bottom, left] = line.width;
					style += `border-width: ${top}px ${right}px ${bottom}px ${left}px; border-style: solid;`;
				} else {
					style += `border-width: ${line.width}px; border-style: solid;`;
				}
			}
		}

		// Padding (default 4px for wrapped text, 0 otherwise)
		const defaultPadding = font?.wrap ? 4 : 0;
		const pad = layout.padding ?? defaultPadding;
		if (pad !== 0) {
			const padValue = typeof pad === 'number' ? `${pad}px` : pad;
			style += `padding: ${padValue};`;
		}

		return style;
	});

	function handleClick() {
		if (drillTo && visible()) {
			navigation.drillInto(drillTo, 0, returnHere);
		}
	}
</script>

{#if visible()}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fragment"
		class:fragment-positioned={layout}
		class:fragment-wrap={font?.wrap}
		class:drillable={drillTo}
		class:animate-fade={showAnimation && animate === 'fade'}
		class:animate-fly-up={showAnimation && animate === 'fly-up'}
		class:animate-fly-down={showAnimation && animate === 'fly-down'}
		class:animate-fly-left={showAnimation && animate === 'fly-left'}
		class:animate-fly-right={showAnimation && animate === 'fly-right'}
		class:animate-scale={showAnimation && animate === 'scale'}
		class:animate-wipe={showAnimation && animate === 'wipe'}
		class:animate-wipe-up={showAnimation && animate === 'wipe-up'}
		class:animate-wipe-down={showAnimation && animate === 'wipe-down'}
		class:animate-wipe-left={showAnimation && animate === 'wipe-left'}
		class:animate-wipe-right={showAnimation && animate === 'wipe-right'}
		class:animate-draw={showAnimation && animate === 'draw'}
		class:revealed={animationReady && !showAnimation}
		style="{computedStyle()}--animation-delay: {animationDelay}ms;"
		onclick={drillTo ? handleClick : undefined}
	>
		{#if font?.wrap}
			<span class="wrap-content">{@render children()}</span>
		{:else}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
	/* Positioned fragment styling (when layout is provided) */
	.fragment-positioned {
		display: flex;
		box-sizing: border-box;
		overflow: visible;
	}

	/* Wrap content - inner span allows inline elements to flow naturally */
	.wrap-content {
		display: inline;
	}

	/* Drillable styling */
	.drillable {
		cursor: pointer;
	}
	.drillable:hover {
		outline: 2px solid rgba(59, 130, 246, 0.6);
		outline-offset: 3px;
		border-radius: 4px;
	}

	/* ========== CSS Animations ========== */
	
	/* Fade */
	.animate-fade {
		animation: fragmentFadeIn 0.5s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	/* Fly Up */
	.animate-fly-up {
		animation: fragmentFlyUp 0.3s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentFlyUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Fly Down */
	.animate-fly-down {
		animation: fragmentFlyDown 0.3s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentFlyDown {
		from { opacity: 0; transform: translateY(-20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Fly Left */
	.animate-fly-left {
		animation: fragmentFlyLeft 0.3s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentFlyLeft {
		from { opacity: 0; transform: translateX(20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	/* Fly Right */
	.animate-fly-right {
		animation: fragmentFlyRight 0.3s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentFlyRight {
		from { opacity: 0; transform: translateX(-20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	/* Scale */
	.animate-scale {
		animation: fragmentScale 0.3s ease-out both;
		animation-delay: var(--animation-delay, 0ms);
	}
	@keyframes fragmentScale {
		from { opacity: 0; transform: scale(0.9); }
		to { opacity: 1; transform: scale(1); }
	}

	/* ========== SVG-specific Animations ========== */

	/* Wipe (default: left to right) */
	.animate-wipe :global(svg) {
		clip-path: inset(0 100% 0 0);
		animation: wipeRight 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Wipe Right (explicit) */
	.animate-wipe-right :global(svg) {
		clip-path: inset(0 100% 0 0);
		animation: wipeRight 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Wipe Left */
	.animate-wipe-left :global(svg) {
		clip-path: inset(0 0 0 100%);
		animation: wipeLeft 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Wipe Up */
	.animate-wipe-up :global(svg) {
		clip-path: inset(100% 0 0 0);
		animation: wipeUp 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Wipe Down */
	.animate-wipe-down :global(svg) {
		clip-path: inset(0 0 100% 0);
		animation: wipeDown 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Revealed state (for drill return - show immediately without animation) */
	/* Apply to regular elements (opacity for fade/fly animations) */
	.revealed {
		opacity: 1 !important;
		transform: none !important;
	}
	
	/* Apply to SVG elements (clip-path for wipe animations) */
	.revealed :global(svg) {
		clip-path: inset(0 0 0 0);
	}

	@keyframes wipeRight {
		from { clip-path: inset(0 100% 0 0); }
		to { clip-path: inset(0 0 0 0); }
	}

	@keyframes wipeLeft {
		from { clip-path: inset(0 0 0 100%); }
		to { clip-path: inset(0 0 0 0); }
	}

	@keyframes wipeUp {
		from { clip-path: inset(100% 0 0 0); }
		to { clip-path: inset(0 0 0 0); }
	}

	@keyframes wipeDown {
		from { clip-path: inset(0 0 100% 0); }
		to { clip-path: inset(0 0 0 0); }
	}

	/* Draw animation (stroke drawing effect) */
	.animate-draw :global(svg path),
	.animate-draw :global(svg line),
	.animate-draw :global(svg polyline),
	.animate-draw :global(svg circle),
	.animate-draw :global(svg ellipse),
	.animate-draw :global(svg rect),
	.animate-draw :global(svg polygon) {
		stroke-dasharray: var(--path-length, 1000);
		stroke-dashoffset: var(--path-length, 1000);
		animation: strokeDraw 0.5s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}

	/* Arc arrowhead appears after arc path finishes drawing */
	.animate-draw :global(svg path.arc-arrowhead) {
		animation-delay: calc(var(--animation-delay, 0ms) + 0.45s);
	}

	.revealed :global(svg path),
	.revealed :global(svg line),
	.revealed :global(svg polyline),
	.revealed :global(svg circle),
	.revealed :global(svg ellipse),
	.revealed :global(svg rect),
	.revealed :global(svg polygon) {
		stroke-dashoffset: 0;
	}

	@keyframes strokeDraw {
		to { stroke-dashoffset: 0; }
	}
</style>
