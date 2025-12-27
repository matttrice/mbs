<script lang="ts">
	import { currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';
	
	// Get original step lookup function from PresentationProvider
	let getOriginalStep: ((slideIndex: number, normalizedStep: number) => number) | undefined = $state();
	
	// Derive the original step for display
	let originalStep = $derived(
		getOriginalStep && $currentFragment > 0
			? getOriginalStep($currentSlide, $currentFragment)
			: $currentFragment
	);
</script>

<PresentationProvider name="promises" slideCount={3} bind:getOriginalStep>
	<div class="presentation">
		<!-- Debug overlay -->
		<div class="debug">
			Slide: {$currentSlide + 1}/{$maxSlide + 1} | 
			Fragment: {$currentFragment}/{$maxFragment} (step={originalStep}) | 
			Stack: {$stackDepth}
		</div>

		<div class="slide-container">
			<!-- All slides render to register maxSteps, only active one visible -->
			<div class="slide-wrapper" class:active={$currentSlide === 0}>
				<Slide1 slideIndex={0} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 1}>
				<Slide2 slideIndex={1} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 2}>
				<Slide3 slideIndex={2} />
			</div>
		</div>

		<!-- Slide indicator dots -->
		<div class="slide-indicators">
			{#each {length: 3} as _, index}
				<button 
					class="indicator-dot"
					class:active={$currentSlide === index}
					onclick={() => import('$lib/stores/navigation').then(m => m.navigation.goToSlide(index))}
					aria-label="Go to slide {index + 1}"
				>
					{index + 1}
				</button>
			{/each}
		</div>
	</div>
</PresentationProvider>

<style>
	/* All presentation styles now in $lib/styles/presentation.css */
</style>
