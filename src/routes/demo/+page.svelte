<script lang="ts">
	import { navigation, currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import { onMount } from 'svelte';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';

	// Slides report their maxStep via callback - collected here
	// Using $state to track slide maxSteps as they register
	let slideMaxSteps = $state<number[]>([0, 0, 0]);
	
	// Slide titles for display
	const slideTitles = [
		'Life - Types of Living Things',
		'Mankind - Origins & Destinations',
		'Man & God - Hebrews 4:12'
	];

	// Callbacks for slides to report their maxStep
	function handleSlide1MaxStep(maxStep: number) {
		slideMaxSteps[0] = maxStep;
		updateNavigation();
	}
	
	function handleSlide2MaxStep(maxStep: number) {
		slideMaxSteps[1] = maxStep;
		updateNavigation();
	}
	
	function handleSlide3MaxStep(maxStep: number) {
		slideMaxSteps[2] = maxStep;
		updateNavigation();
	}

	// Update navigation when all slides have reported
	function updateNavigation() {
		// Only init once all slides have reported non-zero maxSteps
		if (slideMaxSteps.every(s => s > 0)) {
			navigation.init('demo', slideMaxSteps);
		}
	}

	// Validate all slides registered properly
	onMount(() => {
		setTimeout(() => {
			if (!slideMaxSteps.every(s => s > 0)) {
				const missing = slideMaxSteps
					.map((s, i) => s === 0 ? i + 1 : null)
					.filter(Boolean);
				throw new Error(`Slides ${missing.join(', ')} did not report maxStep. Wrap content in <Slide>.`);
			}
		}, 100);
	});
</script>

<div class="presentation">
	<header>
		<h1>
			{#if $currentSlide === 0}
				Life
			{:else if $currentSlide === 1}
				Mankind
			{:else}
				Man / God
			{/if}
		</h1>
		<div class="subtitle">
			{slideTitles[$currentSlide]}
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
			<Slide1 onMaxStep={handleSlide1MaxStep} />
		</div>
		<div class="slide-wrapper" class:active={$currentSlide === 1}>
			<Slide2 onMaxStep={handleSlide2MaxStep} />
		</div>
		<div class="slide-wrapper" class:active={$currentSlide === 2}>
			<Slide3 onMaxStep={handleSlide3MaxStep} />
		</div>
	</div>

	<!-- Slide indicator dots -->
	<div class="slide-indicators">
		{#each slideMaxSteps as _, index}
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

<style>
	.presentation {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%);
		display: flex;
		flex-direction: column;
		padding: 20px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 16px;
	}

	header h1 {
		font-size: 48px;
		margin: 0;
		color: #1a1a1a;
	}

	.subtitle {
		margin-top: 4px;
		color: #666;
		font-size: 16px;
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
		padding: 16px 0;
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
		background: #0066cc;
		border-color: #0066cc;
		color: #fff;
	}
</style>
