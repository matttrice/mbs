<script lang="ts">
	import { currentSlide } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';
	import Slide4 from './slides/Slide4.svelte';
	import Slide5 from './slides/Slide5.svelte';
</script>

<PresentationProvider name="ark" slideCount={5}>
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
			<div class="slide-wrapper" class:active={$currentSlide === 4}>
				<Slide5 slideIndex={4} />
			</div>
		</div>

		<div class="slide-indicators">
			{#each { length: 5 } as _, index}
				<button
					class="indicator-dot"
					class:active={$currentSlide === index}
					onclick={() => import('$lib/stores/navigation').then((m) => m.navigation.goToSlide(index))}
					aria-label="Go to slide {index + 1}"
				>
					{index + 1}
				</button>
			{/each}
		</div>
	</div>
</PresentationProvider>
