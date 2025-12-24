<script lang="ts">
	import { currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	import './theme.css';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';
</script>

<PresentationProvider name="promises" slideCount={3}>
	<div class="presentation">
		<!-- Debug overlay -->
		<div class="debug">
			Slide: {$currentSlide + 1}/{$maxSlide + 1} | 
			Fragment: {$currentFragment}/{$maxFragment} | 
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
	.presentation {
		width: 100vw;
		height: 100vh;
		background: #000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		overflow: hidden;
	}

	.debug {
		position: fixed;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.7);
		color: #0f0;
		padding: 8px 12px;
		border-radius: 4px;
		font-family: monospace;
		font-size: 12px;
		z-index: 1000;
	}

	.slide-container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.slide-wrapper {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
		pointer-events: none;
	}

	.slide-wrapper.active {
		visibility: visible;
		pointer-events: auto;
	}

	.slide-indicators {
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 8px 16px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 20px;
		z-index: 1000;
	}

	.indicator-dot {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 2px solid #888;
		background: #333;
		color: #888;
		font-size: 12px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.indicator-dot:hover {
		background: #555;
		border-color: #aaa;
	}

	.indicator-dot.active {
		background: #0066cc;
		border-color: #0066cc;
		color: #fff;
	}
</style>
