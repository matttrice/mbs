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
	 */
	export interface SlideProps {
		/** 0-based slide index within a PresentationProvider */
		slideIndex?: number;
	}

	export function getSlideContext(): SlideContext | undefined {
		return getContext(SLIDE_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { navigation } from '$lib/stores/navigation';
	import { getPresentationContext } from './PresentationProvider.svelte';

	/**
	 * Wrapper component for slide content that auto-registers Fragment steps.
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
		children: import('svelte').Snippet;
	}

	let { slideIndex, children }: Props = $props();

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
</script>

<div class="slide">
	{@render children()}
</div>

<style>
	.slide {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
