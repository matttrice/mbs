<script lang="ts">
	import { navigation, currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import { onMount } from 'svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import './theme.css';
	
	// Import slide components
	import Slide1 from './slides/Slide1.svelte';
	import Slide2 from './slides/Slide2.svelte';
	import Slide3 from './slides/Slide3.svelte';

	// Slides report their maxStep via callback - collected here
	let slideMaxSteps = $state<number[]>([0, 0, 0]);
	
	// Slide titles for display
	const slideTitles = [
		'The Promises',
		'',
		'End of lesson'
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
			navigation.init('promises', slideMaxSteps);
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
