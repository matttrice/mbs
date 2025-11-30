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
	 * <Fragment step={4} drillTo="lesson/nested" returnHere>Nested drill returns here</Fragment>
	 * ```
	 *
	 * For static drillable links (always visible, no step):
	 * ```svelte
	 * <Fragment drillTo="lesson/reference" returnHere>
	 *   <span class="link">Click me</span>
	 * </Fragment>
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
		/** Step number (1-indexed) when this content becomes visible. Omit for always-visible content that includes a drillTo prop*/
		step?: number;
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
		/**
		 * If true, the drilled content returns here (to this drill),
		 * instead of all the way back to the origin presentation.
		 * Use for nested drills that should return to their caller.
		 */
		returnHere?: boolean;
		children: import('svelte').Snippet;
	}

	let {
		step,
		withPrev = false,
		afterPrev = false,
		drillTo,
		returnHere = false,
		children
	}: Props = $props();

	// Register this step with the slide context (if within a Slide)
	// Only register if step is defined
	const slideContext = getSlideContext();
	if (slideContext && step !== undefined) {
		slideContext.registerStep(step);
	}

	// Register drillTo target with navigation store
	// This allows auto-drill when next() is called at this step
	// Only register if both drillTo AND step are defined (auto-drill needs a step)
	onMount(() => {
		if (drillTo && step !== undefined) {
			navigation.registerDrillTarget(step, drillTo, returnHere);
		}
	});

	onDestroy(() => {
		if (drillTo && step !== undefined) {
			navigation.unregisterDrillTarget(step);
		}
	});

	// withPrev and afterPrev appear with the previous step
	// If no step defined, these don't apply
	let effectiveStep = $derived(
		step !== undefined ? (withPrev || afterPrev ? step - 1 : step) : 0
	);

	// afterPrev gets a default delay (applied via CSS or inline style)
	let autoDelay = $derived(afterPrev && step !== undefined ? 500 : 0);

	// Always visible if no step defined, otherwise visibility depends on currentFragment
	let visible = $derived(step === undefined || $currentFragment >= effectiveStep);

	function handleClick() {
		if (drillTo && visible) {
			navigation.drillInto(drillTo, 0, returnHere);
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
