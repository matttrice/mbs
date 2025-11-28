<script lang="ts">
	import { currentFragment, navigation } from '$lib/stores/navigation';
	import { fade } from 'svelte/transition';
	import type { TransitionConfig } from 'svelte/transition';
	import { getSlideContext } from './Slide.svelte';

	interface Props {
		step: number;
		withPrev?: boolean;
		afterPrev?: boolean;
		drillTo?: string;
		children: import('svelte').Snippet;
	}

	let {
		step,
		withPrev = false,
		afterPrev = false,
		drillTo,
		children
	}: Props = $props();

	// Register this step with the slide context (if within a Slide)
	const slideContext = getSlideContext();
	if (slideContext) {
		slideContext.registerStep(step);
	}

	// withPrev and afterPrev appear with the previous step
	let effectiveStep = $derived(withPrev || afterPrev ? step - 1 : step);

	// afterPrev gets a default delay (applied via CSS or inline style)
	let autoDelay = $derived(afterPrev ? 500 : 0);

	let visible = $derived($currentFragment >= effectiveStep);

	function handleClick() {
		if (drillTo && visible) {
			navigation.drillInto(drillTo);
		}
	}
</script>

<!--
	Fragment handles: visibility, withPrev/afterPrev logic, drill navigation
	Transitions are applied by the CONSUMER using Svelte's native syntax
	
	Usage:
	<Fragment step={3}>
		<div transition:fly={{ y: 20 }}>Content</div>
	</Fragment>
-->
{#if visible}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class:drillable={drillTo}
		style:animation-delay="{autoDelay}ms"
		onclick={drillTo ? handleClick : undefined}
	>
		{@render children()}
	</div>
{/if}

<style>
	.drillable {
		cursor: pointer;
	}
	.drillable:hover {
		outline: 2px solid rgba(59, 130, 246, 0.6);
		outline-offset: 3px;
		border-radius: 4px;
	}
</style>
