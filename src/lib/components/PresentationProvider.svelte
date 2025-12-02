<script lang="ts" module>
	import { getContext, setContext } from 'svelte';

	const PRESENTATION_CONTEXT_KEY = 'presentation-provider';

	export interface PresentationContext {
		/** Register a slide's maxStep. Called by Slide components. */
		registerSlide: (slideIndex: number, maxStep: number) => void;
		/** Get the current slide index for visibility control */
		currentSlide: import('svelte/store').Readable<number>;
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
		children: import('svelte').Snippet;
	}

	let { name, slideCount, children }: Props = $props();

	// Track maxSteps for each slide
	let slideMaxSteps = $state<number[]>(Array(slideCount).fill(0));
	let initialized = $state(false);

	function registerSlide(slideIndex: number, maxStep: number) {
		if (slideIndex >= 0 && slideIndex < slideCount) {
			slideMaxSteps[slideIndex] = maxStep;
			checkAndInit();
		} else {
			console.warn(`[PresentationProvider] Invalid slide index: ${slideIndex}. Expected 0-${slideCount - 1}`);
		}
	}

	function checkAndInit() {
		// Only init once all slides have reported non-zero maxSteps
		if (!initialized && slideMaxSteps.every(s => s > 0)) {
			initialized = true;
			navigation.init(name, slideMaxSteps);
		}
	}

	// Set up context for child Slide components
	setContext<PresentationContext>(PRESENTATION_CONTEXT_KEY, {
		registerSlide,
		currentSlide
	});

	// Validate all slides registered properly
	onMount(() => {
		setTimeout(() => {
			if (!slideMaxSteps.every(s => s > 0)) {
				const missing = slideMaxSteps
					.map((s, i) => s === 0 ? i + 1 : null)
					.filter(Boolean);
				console.error(`[PresentationProvider] Slides ${missing.join(', ')} did not register. Ensure each uses <Slide slideIndex={n}>.`);
			}
		}, 100);
	});
</script>

{@render children()}
