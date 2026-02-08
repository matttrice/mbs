<script lang="ts" module>
	import { getContext, setContext, untrack } from 'svelte';

	const PRESENTATION_CONTEXT_KEY = 'presentation-provider';

	export interface PresentationContext {
		/** The presentation name (used for global registry) */
		presentationName: string;
		/** Register a slide's maxStep. Called by Slide components. */
		registerSlide: (slideIndex: number, maxStep: number) => void;
		/** Register a slide's original step lookup function. Called by Slide components. */
		registerOriginalStepLookup: (slideIndex: number, lookup: (normalizedStep: number) => number) => void;
		/** Get the current slide index for visibility control */
		currentSlide: import('svelte/store').Readable<number>;
		/** Get the original author step for the current fragment on the current slide */
		getOriginalStep: (slideIndex: number, normalizedStep: number) => number;
	}

	export function getPresentationContext(): PresentationContext | undefined {
		return getContext(PRESENTATION_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { navigation, currentSlide } from '$lib/stores/navigation';

	/**
	 * Provider component that orchestrates multi-slide presentations.
	 * 
	 * Wraps slide components and automatically:
	 * - Collects maxStep from each Slide via context
	 * - Calls navigation.init() when all slides register
	 * - Provides currentSlide for visibility control
	 * 
	 * @example
	 * ```svelte
	 * <PresentationProvider name="promises" slideCount={3}>
	 *   <Slide1 />
	 *   <Slide2 />
	 *   <Slide3 />
	 * </PresentationProvider>
	 * ```
	 */
	interface Props {
		/** Unique name for this presentation (used for localStorage persistence) */
		name: string;
		/** Number of slides in the presentation */
		slideCount: number;
		/** Bindable: function to get original author step from normalized step */
		getOriginalStep?: (slideIndex: number, normalizedStep: number) => number;
		children: import('svelte').Snippet;
	}

	let { name, slideCount, getOriginalStep: getOriginalStepBind = $bindable(), children }: Props = $props();

	// Track maxSteps for each slide
	let slideMaxSteps = $state<number[]>(untrack(() => Array(slideCount).fill(0)));
	// Track which slides have registered (separate from maxStep value)
	let slideRegistered = $state<boolean[]>(untrack(() => Array(slideCount).fill(false)));
	// Track original step lookup functions for each slide
	let originalStepLookups = $state<Map<number, (normalizedStep: number) => number>>(new Map());
	let initialized = $state(false);

	function registerSlide(slideIndex: number, maxStep: number) {
		if (slideIndex >= 0 && slideIndex < slideCount) {
			slideMaxSteps[slideIndex] = maxStep;
			slideRegistered[slideIndex] = true;
			checkAndInit();
		} else {
			console.warn(`[PresentationProvider] Invalid slide index: ${slideIndex}. Expected 0-${slideCount - 1}`);
		}
	}

	function registerOriginalStepLookup(slideIndex: number, lookup: (normalizedStep: number) => number) {
		originalStepLookups.set(slideIndex, lookup);
		// Update the bindable prop so parent can use this function
		getOriginalStepBind = getOriginalStep;
	}

	function getOriginalStep(slideIndex: number, normalizedStep: number): number {
		const lookup = originalStepLookups.get(slideIndex);
		return lookup ? lookup(normalizedStep) : normalizedStep;
	}

	function checkAndInit() {
		// Init once all slides have registered (even those with 0 steps)
		if (!initialized && slideRegistered.every(registered => registered)) {
			initialized = true;
			untrack(() => navigation.init(name, slideMaxSteps));
		}
	}

	// Set up context for child Slide components
	setContext<PresentationContext>(PRESENTATION_CONTEXT_KEY, {
		presentationName: untrack(() => name),
		registerSlide,
		registerOriginalStepLookup,
		currentSlide,
		getOriginalStep
	});

	// Validate all slides registered properly
	onMount(() => {
		setTimeout(() => {
			if (!slideRegistered.every(registered => registered)) {
				const missing = slideRegistered
					.map((registered, i) => !registered ? i + 1 : null)
					.filter(Boolean);
				console.error(`[PresentationProvider] Slides ${missing.join(', ')} did not register. Ensure each uses <Slide slideIndex={n}>.`);
			}
		}, 100);
	});
</script>

{@render children()}
