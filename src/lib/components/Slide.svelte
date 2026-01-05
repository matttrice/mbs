<script lang="ts" module>
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';

	const SLIDE_CONTEXT_KEY = 'slide-step-tracker';

	export interface SlideContext {
		registerStep: (step: number) => void;
		maxStep: Writable<number>;
		/**
		 * Get the normalized step number for an author step.
		 * Maps author steps with gaps (1, 5, 10) to consecutive integers (1, 2, 3).
		 * Preserves decimal part for animation delay (19.1 → 3.1 if 19 normalizes to 3).
		 */
		getNormalizedStep: (authorStep: number) => number;
		/**
		 * Get the original author step number for a normalized step.
		 * Reverse lookup: normalized 3 → original 19 (if steps were [1, 5, 19]).
		 * Returns the normalized step if no mapping exists.
		 */
		getOriginalStep: (normalizedStep: number) => number;
		/** The 0-based slide index, or undefined for standalone drill slides */
		slideIndex: number | undefined;
	}

	/**
	 * Props type for Slide component.
	 * - In PresentationProvider: pass `slideIndex` (0-based)
	 * - In drill pages: no props needed
	 * - Pass `width` and `height` to enable fixed-canvas scaling (pixel-perfect mode)
	 */
	export interface SlideProps {
		/** 0-based slide index within a PresentationProvider */
		slideIndex?: number;
		/** Canvas width in pixels for fixed scaling (default: 960) */
		width?: number;
		/** Canvas height in pixels for fixed scaling (default: 540) */
		height?: number;
	}

	export function getSlideContext(): SlideContext | undefined {
		return getContext(SLIDE_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { navigation, registerOriginalStepLookup, unregisterOriginalStepLookup, currentPresentation } from '$lib/stores/navigation';
	import { getPresentationContext } from './PresentationProvider.svelte';
	import { getCustomShowContext } from './CustomShowProvider.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { get } from 'svelte/store';

	/**
	 * Wrapper component for slide content that auto-registers Fragment steps.
	 * 
	 * Implements a fixed-canvas scaling system for pixel-perfect PowerPoint reproduction.
	 * The slide renders at a fixed resolution (default 960×540) and scales via CSS transform
	 * to fit the viewport while maintaining 16:9 aspect ratio.
	 *
	 * **Inside PresentationProvider:** Pass `slideIndex` to register with the provider.
	 *
	 * ```svelte
	 * <PresentationProvider name="demo" slideCount={3}>
	 *   <Slide slideIndex={0}>...</Slide>
	 *   <Slide slideIndex={1}>...</Slide>
	 * </PresentationProvider>
	 * ```
	 *
	 * **Standalone drill page:** No props needed — auto-calls `navigation.setMaxFragment()`.
	 *
	 * ```svelte
	 * <Slide>
	 *   <Fragment step={1}>...</Fragment>
	 * </Slide>
	 * ```
	 */
	interface Props {
		/** 0-based slide index when inside a PresentationProvider */
		slideIndex?: number;
		/** Canvas width in pixels for fixed scaling (default: 960) */
		width?: number;
		/** Canvas height in pixels for fixed scaling (default: 540) */
		height?: number;
		children: import('svelte').Snippet;
	}

	let { slideIndex, width = 960, height = 540, children }: Props = $props();

	// Check if we're inside a PresentationProvider or CustomShowProvider
	const presentationContext = getPresentationContext();
	const customShowContext = getCustomShowContext();

	// Track the highest step number seen
	const maxStep = writable(0);
	const registeredSteps = new Set<number>();
	
	// Map author steps to normalized consecutive integers
	// Rebuilds automatically when registeredSteps changes
	let stepMap = $state(new Map<number, number>());
	let reverseStepMap = $state(new Map<number, number>());

	function rebuildStepMap() {
		const sortedSteps = [...registeredSteps].sort((a, b) => a - b);
		const newMap = new Map<number, number>();
		const newReverseMap = new Map<number, number>();
		sortedSteps.forEach((step, index) => {
			const normalized = index + 1; // 1-indexed normalized steps
			newMap.set(step, normalized);
			newReverseMap.set(normalized, step);
		});
		stepMap = newMap;
		reverseStepMap = newReverseMap;
		// maxStep is now simply the count of unique steps
		maxStep.set(sortedSteps.length);
	}

	function registerStep(step: number) {
		if (!registeredSteps.has(step)) {
			registeredSteps.add(step);
			rebuildStepMap();
		}
	}

	/**
	 * Get the normalized step for an author step.
	 * Normalizes integer part and preserves decimal for animation delay.
	 * e.g., if steps are [1, 5, 19] → [1, 2, 3], then 19.1 → 3.1
	 */
	function getNormalizedStep(authorStep: number): number {
		const intPart = Math.floor(authorStep);
		const decimalPart = authorStep - intPart;
		const normalizedInt = stepMap.get(intPart) ?? intPart;
		return normalizedInt + decimalPart;
	}

	/**
	 * Get the original author step for a normalized step.
	 * Reverse lookup: normalized 3 → original 19 (if steps were [1, 5, 19]).
	 */
	function getOriginalStep(normalizedStep: number): number {
		return reverseStepMap.get(normalizedStep) ?? normalizedStep;
	}

	// Set up context for child Fragment components
	setContext<SlideContext>(SLIDE_CONTEXT_KEY, {
		registerStep,
		maxStep,
		getNormalizedStep,
		getOriginalStep,
		slideIndex
	});

	// Report maxStep based on context
	// Priority: PresentationProvider > CustomShowProvider > Standalone
	// For PresentationProvider/CustomShowProvider: register with the provider
	// For standalone drill: set maxFragment directly
	// Also register with global original step registry for DebugOverlay
	let registeredPresentation: string | undefined;
	let registeredSlideIndex: number | undefined;

	onMount(() => {
		const effectiveSlideIndex = slideIndex ?? 0;
		// Get presentation name from context (preferred) or navigation store (for drills)
		const presentation = presentationContext?.presentationName ?? customShowContext?.name ?? get(currentPresentation);

		if (presentationContext && slideIndex !== undefined) {
			// Inside PresentationProvider: register immediately with current maxStep
			// This ensures slides with no animated fragments still register
			presentationContext.registerSlide(slideIndex, $maxStep);
			// Also register the original step lookup function (for backward compat)
			presentationContext.registerOriginalStepLookup(slideIndex, getOriginalStep);
		} else if (customShowContext && slideIndex !== undefined) {
			// Inside CustomShowProvider: register with it
			customShowContext.registerSlide(slideIndex, $maxStep);
		}

		// Register with global registry for DebugOverlay
		if (presentation) {
			registerOriginalStepLookup(presentation, effectiveSlideIndex, getOriginalStep);
			registeredPresentation = presentation;
			registeredSlideIndex = effectiveSlideIndex;
		}
	});

	onDestroy(() => {
		// Clean up global registry
		if (registeredPresentation !== undefined && registeredSlideIndex !== undefined) {
			unregisterOriginalStepLookup(registeredPresentation, registeredSlideIndex);
		}
	});

	// Also update when maxStep changes (for dynamic content or delayed registration)
	$effect(() => {
		if ($maxStep > 0) {
			if (presentationContext && slideIndex !== undefined) {
				// Update registration with new maxStep
				presentationContext.registerSlide(slideIndex, $maxStep);
			} else if (customShowContext && slideIndex !== undefined) {
				// Update registration with CustomShowProvider
				customShowContext.registerSlide(slideIndex, $maxStep);
			} else {
				// Standalone drillTo and return: set maxFragment directly
				navigation.setMaxFragment($maxStep);
			}
		}
	});

	// Scaling state for fixed-canvas mode
	let scale = $state(1);
	let viewportRef: HTMLDivElement | undefined = $state();

	function updateScale() {
		if (!viewportRef) return;
		
		// Use the actual container dimensions, not window
		const rect = viewportRef.getBoundingClientRect();
		const containerWidth = rect.width;
		const containerHeight = rect.height;
		
		// Calculate scale to fit container while maintaining aspect ratio
		// Use 0.95 factor to leave a small margin
		const scaleX = (containerWidth * 0.95) / width;
		const scaleY = (containerHeight * 0.95) / height;
		scale = Math.min(scaleX, scaleY);
	}

	onMount(() => {
		// Initial scale after mount
		setTimeout(updateScale, 0);
		window.addEventListener('resize', updateScale);
		return () => window.removeEventListener('resize', updateScale);
	});
</script>

<div class="slide-viewport" bind:this={viewportRef}>
	<div 
		class="slide-canvas"
		style:width="{width}px"
		style:height="{height}px"
		style:transform="scale({scale})"
	>
		{@render children()}
	</div>
</div>

<style>
	.slide-viewport {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: visible;
		background: inherit;
	}

	.slide-canvas {
		position: relative;
		transform-origin: center center;
		overflow: visible;
		/* Transparent - let slide content control background */
		background: transparent;
	}
</style>
