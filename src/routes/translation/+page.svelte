<script lang="ts">
	import { currentSlide } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';
	import Slide4 from './slides/Slide4.svelte';
</script>

<PresentationProvider name="translation" slideCount={4}>
	<div class="presentation">
		<div class="slide-container">
			<div class="slide-wrapper" class:active={$currentSlide === 0}>
				<Slide1 slideIndex={0} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 1}>
				<Slide2 slideIndex={1} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 2}>
				<Slide3 slideIndex={2} />
			</div>
			<div class="slide-wrapper" class:active={$currentSlide === 3}>
				<Slide4 slideIndex={3} />
			</div>
		</div>

		<!-- Slide indicator dots -->
		<div class="slide-indicators">
			{#each {length: 4} as _, index}
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
	.presentation {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.slide-container {
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	.slide-wrapper {
		position: absolute;
		inset: 0;
		visibility: hidden;
	}

	.slide-wrapper.active {
		visibility: visible;
	}

	.slide-indicators {
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 16px;
		background: var(--bg-light);
	}

	.indicator-dot {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 2px solid var(--bg-level-3);
		background: transparent;
		color: var(--bg-level-3);
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.indicator-dot:hover {
		background: var(--bg-level-3);
		color: white;
	}

	.indicator-dot.active {
		background: var(--bg-level-3);
		color: white;
	}
</style>
