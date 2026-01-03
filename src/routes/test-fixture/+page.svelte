<script lang="ts">
	import { currentSlide, navigation } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

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
		<div class="slides-container">
			<!-- Slide 1: Basic Drill -->
			<div class="slide-wrapper" class:active={$currentSlide === 0}>
				<Slide slideIndex={0}>
					<div class="slide-bg"></div>
					
					<!-- Title (always visible) -->
					<Fragment
						layout={{ x: 300, y: 20, width: 360, height: 50 }}
						font={{ font_size: 36, bold: true }}
					>
						Test Fixture
					</Fragment>

					<!-- Step 1: Drillable fragment (single level drill) -->
					<Fragment
						step={1}
						drillTo="test-fixture/drill-01"
						layout={{ x: 100, y: 100, width: 200, height: 40 }}
						font={{ font_size: 24 }}
					>
						First Fragment
					</Fragment>

					<!-- Step 2: Non-drillable fragment -->
					<Fragment
						step={2}
						layout={{ x: 100, y: 160, width: 200, height: 40 }}
						font={{ font_size: 24 }}
					>
						Second Fragment
					</Fragment>
				</Slide>
			</div>

			<!-- Slide 2: Multi-Drill Test -->
			<div class="slide-wrapper" class:active={$currentSlide === 1}>
				<Slide slideIndex={1}>
					<div class="slide-bg"></div>
					
					<!-- Title (always visible) -->
					<Fragment
						layout={{ x: 300, y: 20, width: 360, height: 50 }}
						font={{ font_size: 36, bold: true }}
					>
						Slide Two
					</Fragment>

					<!-- Step 1: Starts nested drill chain (drill-01 → drill-02 → drill-03) -->
					<Fragment
						step={1}
						drillTo="test-fixture/drill-01"
						layout={{ x: 100, y: 100, width: 250, height: 40 }}
						font={{ font_size: 24 }}
					>
						Multi Drill Start
					</Fragment>

					<!-- Step 2: After returning from nested drills -->
					<Fragment
						step={2}
						layout={{ x: 100, y: 160, width: 200, height: 40 }}
						font={{ font_size: 24 }}
					>
						After Multi
					</Fragment>
				</Slide>
			</div>
		</div>

		<!-- Slide indicator dots -->
		<div class="slide-indicators">
			{#each {length: 2} as _, index}
				<button 
					class="indicator-dot"
					class:active={$currentSlide === index}
					onclick={() => navigation.goToSlide(index)}
					aria-label="Go to slide {index + 1}"
				>
					{index + 1}
				</button>
			{/each}
		</div>
	</div>
</PresentationProvider>

<style>
	.presentation {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.slides-container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.slide-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
	}

	.slide-wrapper.active {
		visibility: visible;
	}

	.slide-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
	}
</style>
