<script lang="ts">
	import { currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import Fragment from '$lib/components/Fragment.svelte';
	import PresentationProvider from '$lib/components/PresentationProvider.svelte';
	import './theme.css';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';
	
	// Slide titles for display
	const slideTitles = [
		'The Promises',
		'',
		'End of lesson'
	];
</script>

<PresentationProvider name="promises" slideCount={3}>
	<div class="presentation">
		<header>
			<div class="title-row">
				{#if $currentSlide === 0}
					<Fragment drillTo="promises/genesis-12-1">
						<span class="scripture-ref">Genesis 12:1-3</span>
					</Fragment>
				{/if}
				{#if $currentSlide === 1}
					<Fragment drillTo="promises/galatians-4-21">
						<span class="scripture-ref">Galatians 4:21-31</span>
					</Fragment>
				{/if}
				<h1>{slideTitles[$currentSlide]}</h1>
			</div>
			<div class="debug">
				Slide: {$currentSlide + 1}/{$maxSlide + 1} | 
				Fragment: {$currentFragment}/{$maxFragment} | 
				Stack: {$stackDepth}
			</div>
		</header>

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
		width: 100%;
		height: 100%;
		background: var(--color-bg-light, #e8e8e8);
		display: flex;
		flex-direction: column;
		padding: 10px 20px 20px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 8px;
	}

	.title-row {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 24px;
	}

	.scripture-ref {
		font-size: 32px;
		color: #000;
		cursor: pointer;
	}

	.scripture-ref:hover {
		color: var(--color-scripture-ref, #0000cc);
		text-decoration: underline;
	}

	header h1 {
		font-size: 42px;
		margin: 0;
		color: var(--color-title, #000);
		font-weight: bold;
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
		flex-direction: column;
		overflow: hidden;
		position: relative;
	}

	.slide-wrapper {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		visibility: hidden;
		pointer-events: none;
	}

	.slide-wrapper.active {
		position: relative;
		visibility: visible;
		pointer-events: auto;
	}

	.slide-indicators {
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 12px 0 0;
	}

	.indicator-dot {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 2px solid #666;
		background: #fff;
		color: #666;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.indicator-dot:hover {
		background: #e0e0e0;
	}

	.indicator-dot.active {
		background: var(--color-scripture-ref, #0066cc);
		border-color: var(--color-scripture-ref, #0066cc);
		color: #fff;
	}
</style>
