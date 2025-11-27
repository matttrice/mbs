<script lang="ts">
	import { currentFragment, navigation } from '$lib/stores/navigation';
	import { fade, fly, scale, slide } from 'svelte/transition';

	interface Props {
		step: number;
		// PowerPoint-style animation triggers:
		// - 'onClick' (default): appears on next click, consumes a step
		// - 'withPrevious': appears at same time as previous element (same step)
		// - 'afterPrevious': appears after previous with a delay (same step)
		trigger?: 'onClick' | 'withPrevious' | 'afterPrevious';
		transition?: 'fade' | 'fly' | 'scale' | 'slide' | 'none';
		duration?: number;
		delay?: number;
		drillTo?: string;
		children: import('svelte').Snippet;
	}

	let { 
		step, 
		trigger = 'onClick',
		transition = 'fade', 
		duration = 300, 
		delay = 0,
		drillTo, 
		children 
	}: Props = $props();

	// withPrevious and afterPrevious use the previous step number (step - 1)
	// onClick uses its own step number
	let effectiveStep = $derived(trigger === 'onClick' ? step : step - 1);
	
	// afterPrevious adds a default delay if not specified
	let effectiveDelay = $derived(trigger === 'afterPrevious' && delay === 0 ? 300 : delay);

	let isVisible = $derived($currentFragment >= effectiveStep);

	function handleClick() {
		if (drillTo && isVisible) {
			navigation.drillInto(drillTo);
		}
	}

	function getTransitionParams() {
		switch (transition) {
			case 'fly':
				return { y: 20, duration, delay: effectiveDelay };
			case 'scale':
				return { start: 0.95, duration, delay: effectiveDelay };
			case 'slide':
				return { duration, delay: effectiveDelay };
			case 'none':
				return { duration: 0, delay: 0 };
			default:
				return { duration, delay: effectiveDelay };
		}
	}

	function transitionFn(node: Element) {
		const params = getTransitionParams();
		switch (transition) {
			case 'fly':
				return fly(node, params);
			case 'scale':
				return scale(node, params);
			case 'slide':
				return slide(node, params);
			case 'none':
				return fade(node, { duration: 0 });
			default:
				return fade(node, params);
		}
	}
</script>

{#if isVisible}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		transition:transitionFn
		class:drillable={drillTo}
		onclick={drillTo ? handleClick : undefined}
	>
		{@render children()}
	</div>
{/if}

<style>
	.drillable {
		cursor: pointer;
		transition: outline 0.15s ease;
	}
	.drillable:hover {
		outline: 2px solid rgba(59, 130, 246, 0.6);
		outline-offset: 3px;
		border-radius: 4px;
	}
</style>
