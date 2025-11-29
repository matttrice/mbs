<script lang="ts">
	import { currentFragment, navigation } from '$lib/stores/navigation';
	import { getSlideContext } from './Slide.svelte';
	import { onMount, onDestroy } from 'svelte';

	/**
	 * Controls visibility of content based on the current fragment step.
	 * Must be used inside a `<Slide>` wrapper for step auto-registration.
	 *
	 * ```svelte
	 * <Fragment step={1}>First content</Fragment>
	 * <Fragment step={2}>Second content</Fragment>
	 * <Fragment step={3} drillTo="lesson/details">Click to drill</Fragment>
	 * ```
	 *
	 * Apply transitions on child elements:
	 * ```svelte
	 * <Fragment step={2}>
	 *   <div transition:fade>Fades in at step 2</div>
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Step number (1-indexed) when this content becomes visible */
		step: number;
		/** Appear with the previous step (no separate click needed) */
		withPrev?: boolean;
		/** Like withPrev but with 500ms animation delay */
		afterPrev?: boolean;
		/**
		 * Route to drill into when clicked (e.g., `"life/ecclesiastes.3.19"`).
		 * Also enables auto-drill: if this is the last fragment and → is pressed,
		 * navigation automatically drills into this route.
		 */
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

	// Register drillTo target with navigation store
	// This allows auto-drill when next() is called at this step
	onMount(() => {
		if (drillTo) {
			navigation.registerDrillTarget(step, drillTo);
		}
	});

	onDestroy(() => {
		if (drillTo) {
			navigation.unregisterDrillTarget(step);
		}
	});

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
