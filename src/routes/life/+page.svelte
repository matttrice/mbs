<script lang="ts">
	import { navigation, currentFragment, currentSlide, stackDepth, maxFragment, maxSlide } from '$lib/stores/navigation';
	import { onMount } from 'svelte';
	
	// Import slide components
	import Slide1Life from './slides/Slide1Life.svelte';
	import Slide2Mankind from './slides/Slide2Mankind.svelte';
	import Slide3ManGod from './slides/Slide3ManGod.svelte';

	// Define slide fragment counts
	// Each number represents total fragments in that slide
	const slideFragmentCounts = [9, 15, 12]; // Slide1: 9, Slide2: 15, Slide3: 12
	
	// Slide titles for display
	const slideTitles = [
		'Life - Types of Living Things',
		'Mankind - Origins & Destinations',
		'Man & God - Hebrews 4:12'
	];

	// Initialize the presentation
	onMount(() => {
		navigation.init('life', slideFragmentCounts);
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
		{#if $currentSlide === 0}
			<Slide1Life />
		{:else if $currentSlide === 1}
			<Slide2Mankind />
		{:else if $currentSlide === 2}
			<Slide3ManGod />
		{/if}
	</div>

	<!-- Slide indicator dots -->
	<div class="slide-indicators">
		{#each slideFragmentCounts as _, index}
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
