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
	import { onMount, untrack } from 'svelte';
	import { navigation, currentFragment } from '$lib/stores/navigation';
	import Slide from './Slide.svelte';
	import type { Component } from 'svelte';
	import {
		getSlideFragmentOffsets,
		getTotalFragments,
		getSlideForFragment
	} from './customShowUtils';

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
	 * **Usage:**
	 * ```svelte
	 * <CustomShowProvider 
	 *   name="baptism-and-faith" 
	 *   slides={[SlideAContent, SlideBContent, SlideCContent]} 
	 * />
	 * ```
	 */
	interface Props {
		/** Unique name for this custom show */
		name: string;
		/** Array of slide content components */
		slides: Component[];
	}

	let { name, slides }: Props = $props();

	const slideCount = untrack(() => slides.length);

	// Track which slide within the custom show we're on
	let currentSlideIndex = $state(0);
	
	// Track maxSteps for each slide in the custom show
	let slideMaxSteps = $state<number[]>(Array(slideCount).fill(0));
	let slideRegistered = $state<boolean[]>(Array(slideCount).fill(false));
	let initialized = $state(false);

	// Compute total fragments across all slides
	// Each slide contributes at least 1 fragment (for static content view)
	let totalMaxFragment = $derived(getTotalFragments(slideMaxSteps));

	function getSlideOffset(slideIndex: number): number {
		const offsets = getSlideFragmentOffsets(slideMaxSteps);
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
		name: untrack(() => name),
		registerSlide,
		get currentSlideIndex() { return currentSlideIndex; },
		slideCount,
		getLocalFragment,
		getSlideOffset
	});

	// React to fragment changes to update current slide visibility
	$effect(() => {
		if (!initialized) return;
		
		const fragment = $currentFragment;
		const { slideIndex, localFragment } = getSlideForFragment(fragment, slideMaxSteps);
		
		if (slideIndex !== currentSlideIndex) {
			console.log('[CustomShowProvider] Switching to slide:', slideIndex, 'at global fragment:', fragment, 'local fragment:', localFragment );
			currentSlideIndex = slideIndex;
		}
	});

	onMount(() => {
		console.log('[CustomShowProvider] Mounted:', name, 'with', slideCount, 'slides');
	});
</script>

<div class="custom-show">
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
