<script lang="ts">
	import {
		currentFragment,
		currentSlide,
		currentPresentation,
		maxFragment,
		maxSlide,
		stackDepth,
		getOriginalStep,
		registryVersion
	} from '$lib/stores/navigation';

	/**
	 * Global debug overlay showing current navigation state.
	 * Displays slide/fragment position and original author step numbers.
	 * 
	 * Add to +layout.svelte to show on all pages.
	 */

	// Derive the original step for display
	// Include $registryVersion to trigger reactivity when registry updates
	let originalStep = $derived(
		$currentFragment > 0
			? getOriginalStep($currentPresentation, $currentSlide, $currentFragment, $registryVersion)
			: $currentFragment
	);

	// Only show when there's an active presentation
	let showOverlay = $derived($currentPresentation !== '');
</script>

{#if showOverlay}
	<div class="debug">
		Slide: {$currentSlide + 1}/{$maxSlide + 1} | 
		Fragment: {$currentFragment}/{$maxFragment}
		{#if originalStep !== $currentFragment}
			(step={originalStep})
		{/if}
		| Drill: {$stackDepth}
	</div>
{/if}

<style>
/* Debug overlay - shows navigation state (top-right corner) */
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
</style>
