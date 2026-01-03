<script lang="ts">
	import { currentSlide } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';

	/**
	 * Test Fixture Presentation
	 * 
	 * A controlled presentation for E2E testing with predictable drill behavior.
	 * This allows tests to verify navigation logic without depending on real content.
	 * 
	 * Structure:
	 * - Slide 1: Basic drill test
	 *   - Step 1: "First Fragment" with drillTo "test-fixture/drill-01"
	 *   - Step 2: "Second Fragment" (no drill)
	 * - Slide 2: Multi-drill test (3 levels deep)
	 *   - Step 1: "Multi Drill Start" with drillTo "test-fixture/drill-01"
	 *     - drill-01 → drill-02 → drill-03 → returns to Slide 2
	 *   - Step 2: "After Multi" (no drill)
	 */
</script>

<PresentationProvider name="test-fixture" slideCount={2}>
	<div class="presentation">

		<div class="slide-container">
			<!-- All slides render to register maxSteps, only active one visible -->
			<div class="slide-wrapper" class:active={$currentSlide === 0}>
				<Slide1 slideIndex={0} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 1}>
				<Slide2 slideIndex={1} />
			</div>
		</div>

		<!-- Slide indicator dots -->
		<div class="slide-indicators">
			{#each {length: 2} as _, index}
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
