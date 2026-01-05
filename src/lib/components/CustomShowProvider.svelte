<script lang="ts" module>
	import { getContext, setContext } from 'svelte';

	const CUSTOM_SHOW_CONTEXT_KEY = 'custom-show-provider';

	export interface CustomShowContext {
		/** The custom show name */
		name: string;
		/** Register a slide's maxStep. Called by Slide components. */
		registerSlide: (slideIndex: number, maxStep: number) => void;
		/** Get the current slide index within the custom show */
		currentSlideIndex: number;
		/** Total number of slides in the custom show */
		slideCount: number;
		/** 
		 * Get the local fragment position for a given slide.
		 * Returns the fragment position relative to this slide (not global).
		 * @param slideIndex - The slide index within this custom show
		 * @param globalFragment - The global fragment from navigation store
		 */
		getLocalFragment: (slideIndex: number, globalFragment: number) => number;
		/**
		 * Get the fragment offset for a slide (sum of all previous slides' maxSteps).
		 * Used to calculate local fragment position.
		 */
		getSlideOffset: (slideIndex: number) => number;
	}

	export function getCustomShowContext(): CustomShowContext | undefined {
		return getContext(CUSTOM_SHOW_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { navigation, currentFragment } from '$lib/stores/navigation';
	import Slide from './Slide.svelte';
	import type { Component, Snippet } from 'svelte';

	/**
	 * Aggregates multiple slide content components into a single custom show (drill).
	 * 
	 * Use this to create a multi-slide drill sequence that automatically advances
	 * through slides and returns to the origin when complete.
	 * 
	 * **Key behavior:**
	 * - All slides are mounted (for step registration) but only current is visible
	 * - Each slide's fragments are counted and aggregated
	 * - Navigation advances through all slides seamlessly
	 * - Last fragment of last slide triggers return to origin
	 * 
	 * **Usage with snippets (recommended):**
	 * ```svelte
	 * <CustomShowProvider name="romans-6-3">
	 *   {#snippet slide0()}
	 *     <SlideAContent />
	 *   {/snippet}
	 *   {#snippet slide1()}
	 *     <SlideBContent />
	 *   {/snippet}
	 * </CustomShowProvider>
	 * ```
	 * 
	 * **Usage with component array:**
	 * ```svelte
	 * <CustomShowProvider 
	 *   name="romans-6-3" 
	 *   slides={[SlideAContent, SlideBContent]} 
	 * />
	 * ```
	 */
	interface Props {
		/** Unique name for this custom show */
		name: string;
		/** Array of slide content components (alternative to snippets) */
		slides?: Component[];
		/** Individual slide snippets: slide0, slide1, slide2, etc. */
		slide0?: Snippet;
		slide1?: Snippet;
		slide2?: Snippet;
		slide3?: Snippet;
		slide4?: Snippet;
		slide5?: Snippet;
		slide6?: Snippet;
		slide7?: Snippet;
		slide8?: Snippet;
		slide9?: Snippet;
	}

	let { 
		name, 
		slides = [],
		slide0, slide1, slide2, slide3, slide4,
		slide5, slide6, slide7, slide8, slide9
	}: Props = $props();

	// Collect snippets into array
	const snippets = [slide0, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]
		.filter((s): s is Snippet => s !== undefined);
	
	// Determine slide count from either components or snippets
	const slideCount = slides.length > 0 ? slides.length : snippets.length;

	// Track which slide within the custom show we're on
	let currentSlideIndex = $state(0);
	
	// Track maxSteps for each slide in the custom show
	let slideMaxSteps = $state<number[]>(Array(slideCount).fill(0));
	let slideRegistered = $state<boolean[]>(Array(slideCount).fill(false));
	let initialized = $state(false);

	// Compute total fragments across all slides
	let totalMaxFragment = $derived(slideMaxSteps.reduce((sum, max) => sum + max, 0));
	
	// Compute the starting fragment offset for each slide
	function getSlideFragmentOffsets(): number[] {
		const offsets: number[] = [0];
		for (let i = 1; i < slideMaxSteps.length; i++) {
			offsets.push(offsets[i - 1] + slideMaxSteps[i - 1]);
		}
		return offsets;
	}

	function getSlideOffset(slideIndex: number): number {
		const offsets = getSlideFragmentOffsets();
		return offsets[slideIndex] ?? 0;
	}

	function getLocalFragment(slideIndex: number, globalFragment: number): number {
		const offset = getSlideOffset(slideIndex);
		return Math.max(0, globalFragment - offset);
	}

	function registerSlide(slideIndex: number, maxStep: number) {
		if (slideIndex >= 0 && slideIndex < slideCount) {
			slideMaxSteps[slideIndex] = maxStep;
			slideRegistered[slideIndex] = true;
			checkAndInit();
		}
	}

	function checkAndInit() {
		// Init once all slides have registered
		if (!initialized && slideRegistered.every(registered => registered)) {
			initialized = true;
			// Set the total maxFragment as the sum of all slides
			navigation.setMaxFragment(totalMaxFragment);
			console.log('[CustomShowProvider] Initialized:', name, 
				'slides:', slideMaxSteps, 
				'total fragments:', totalMaxFragment);
		}
	}

	// Set up context for child Slide components
	setContext<CustomShowContext>(CUSTOM_SHOW_CONTEXT_KEY, {
		name,
		registerSlide,
		get currentSlideIndex() { return currentSlideIndex; },
		slideCount,
		getLocalFragment,
		getSlideOffset
	});

	// Map global fragment position to slide index and local fragment
	function getSlideForFragment(globalFragment: number): { slideIndex: number; localFragment: number } {
		const offsets = getSlideFragmentOffsets();
		for (let i = slideCount - 1; i >= 0; i--) {
			if (globalFragment >= offsets[i]) {
				return {
					slideIndex: i,
					localFragment: globalFragment - offsets[i]
				};
			}
		}
		return { slideIndex: 0, localFragment: 0 };
	}

	// React to fragment changes to update current slide visibility
	$effect(() => {
		if (!initialized) return;
		
		const fragment = $currentFragment;
		const { slideIndex } = getSlideForFragment(fragment);
		
		if (slideIndex !== currentSlideIndex) {
			console.log('[CustomShowProvider] Switching to slide:', slideIndex, 'at global fragment:', fragment);
			currentSlideIndex = slideIndex;
		}
	});

	onMount(() => {
		console.log('[CustomShowProvider] Mounted:', name, 'with', slideCount, 'slides');
	});
</script>

<div class="custom-show">
	{#if slides.length > 0}
		<!-- Component array mode -->
		{#each slides as SlideComponent, index}
			<div 
				class="custom-show-slide" 
				class:active={index === currentSlideIndex}
				style:visibility={index === currentSlideIndex ? 'visible' : 'hidden'}
			>
				<Slide slideIndex={index}>
					<SlideComponent />
				</Slide>
			</div>
		{/each}
	{:else}
		<!-- Snippet mode -->
		{#each snippets as snippet, index}
			<div 
				class="custom-show-slide" 
				class:active={index === currentSlideIndex}
				style:visibility={index === currentSlideIndex ? 'visible' : 'hidden'}
			>
				<Slide slideIndex={index}>
					{@render snippet()}
				</Slide>
			</div>
		{/each}
	{/if}
</div>

<style>
	.custom-show {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.custom-show-slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	.custom-show-slide.active {
		z-index: 1;
	}
</style>
