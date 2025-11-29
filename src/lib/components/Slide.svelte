<script lang="ts" module>
	import { writable, type Writable } from 'svelte/store';
	import { getContext, setContext } from 'svelte';

	const SLIDE_CONTEXT_KEY = 'slide-step-tracker';

	export interface SlideContext {
		registerStep: (step: number) => void;
		maxStep: Writable<number>;
	}

	export function getSlideContext(): SlideContext | undefined {
		return getContext(SLIDE_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { navigation } from '$lib/stores/navigation';

	/**
	 * Wrapper component for slide content that auto-registers Fragment steps.
	 *
	 * **Multi-slide presentation:** Pass `onMaxStep` callback to report maxStep to parent.
	 * The parent collects all slide maxSteps and calls `navigation.init()`.
	 *
	 * ```svelte
	 * <Slide onMaxStep={handleMaxStep}>
	 *   <Fragment step={1}>...</Fragment>
	 * </Slide>
	 * ```
	 *
	 * **Single-slide drill:** Omit `onMaxStep` — the Slide will auto-call
	 * `navigation.setMaxFragment()` when fragments register.
	 *
	 * ```svelte
	 * <Slide>
	 *   <Fragment step={1}>...</Fragment>
	 * </Slide>
	 * ```
	 */
	interface Props {
		/**
		 * Callback invoked with the highest step number registered by child Fragments.
		 * - **Provided:** Reports to parent for multi-slide presentations
		 * - **Omitted:** Auto-calls `navigation.setMaxFragment()` for standalone drills
		 */
		onMaxStep?: (maxStep: number) => void;
		children: import('svelte').Snippet;
	}

	let { onMaxStep, children }: Props = $props();

	// Track the highest step number seen
	const maxStep = writable(0);
	const registeredSteps = new Set<number>();

	function registerStep(step: number) {
		if (!registeredSteps.has(step)) {
			registeredSteps.add(step);
			maxStep.update(current => Math.max(current, step));
		}
	}

	// Set up context for child Fragment components
	setContext<SlideContext>(SLIDE_CONTEXT_KEY, {
		registerStep,
		maxStep
	});

	// Report maxStep to parent OR directly set navigation maxFragment
	$effect(() => {
		if ($maxStep > 0) {
			if (onMaxStep) {
				// Multi-slide presentation: report to parent
				onMaxStep($maxStep);
			} else {
				// Standalone drill: set maxFragment directly
				navigation.setMaxFragment($maxStep);
			}
		}
	});
</script>

<div class="slide">
	{@render children()}
</div>

<style>
	.slide {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
