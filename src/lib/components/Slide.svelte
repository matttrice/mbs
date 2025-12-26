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
	import { navigation } from '$lib/stores/navigation';
	import { getPresentationContext } from './PresentationProvider.svelte';
	import { onMount } from 'svelte';

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

	// Check if we're inside a PresentationProvider
	const presentationContext = getPresentationContext();

	// Track the highest step number seen
	const maxStep = writable(0);
	const registeredSteps = new Set<number>();
	
	// Map author steps to normalized consecutive integers
	// Rebuilds automatically when registeredSteps changes
	let stepMap = $state(new Map<number, number>());

	function rebuildStepMap() {
		const sortedSteps = [...registeredSteps].sort((a, b) => a - b);
		const newMap = new Map<number, number>();
		sortedSteps.forEach((step, index) => {
			newMap.set(step, index + 1); // 1-indexed normalized steps
		});
		stepMap = newMap;
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

	// Set up context for child Fragment components
	setContext<SlideContext>(SLIDE_CONTEXT_KEY, {
		registerStep,
		maxStep,
		getNormalizedStep,
		slideIndex
	});

	// Report maxStep based on context
	// For PresentationProvider: always register (even with 0 steps) using onMount
	// For standalone drill: use effect to set maxFragment when > 0
	onMount(() => {
		if (presentationContext && slideIndex !== undefined) {
			// Inside PresentationProvider: register immediately with current maxStep
			// This ensures slides with no animated fragments still register
			presentationContext.registerSlide(slideIndex, $maxStep);
		}
	});

	// Also update when maxStep changes (for dynamic content or delayed registration)
	$effect(() => {
		if ($maxStep > 0) {
			if (presentationContext && slideIndex !== undefined) {
				// Update registration with new maxStep
				presentationContext.registerSlide(slideIndex, $maxStep);
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
		overflow: hidden;
		background: inherit;
	}

	.slide-canvas {
		position: relative;
		transform-origin: center center;
		overflow: hidden;
		/* Transparent - let slide content control background */
		background: transparent;
	}
</style>
