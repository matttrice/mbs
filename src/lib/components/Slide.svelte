<script lang="ts" module>
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';

	const SLIDE_CONTEXT_KEY = 'slide-step-tracker';

	export interface SlideContext {
		registerStep: (step: number) => void;
		maxStep: Writable<number>;
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

	function registerStep(step: number) {
		if (!registeredSteps.has(step)) {
			registeredSteps.add(step);
			maxStep.update(current => Math.max(current, step));
		}
	}

	// Set up context for child Fragment components
	setContext<SlideContext>(SLIDE_CONTEXT_KEY, {
		registerStep,
		maxStep
	});

	// Report maxStep based on context
	$effect(() => {
		if ($maxStep > 0) {
			if (presentationContext && slideIndex !== undefined) {
				// Inside PresentationProvider: register with provider
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
