<script lang="ts">
	import { currentFragment, navigation } from '$lib/stores/navigation';
	import { getSlideContext } from './Slide.svelte';
	import { onMount, onDestroy } from 'svelte';
	import type { BoxLayout, BoxFont, BoxLine, AnimationType } from '$lib/types';

	/**
	 * Fragment: The unified component for all slide content.
	 * Handles visibility, positioning, styling, and drill navigation.
	 *
	 * Every element on a slide is a Fragment - whether static or animated.
	 *
	 * @example Static positioned content (always visible):
	 * ```svelte
	 * <Fragment layout={{ x: 321, y: 3, width: 316, height: 42 }} font={{ font_size: 43 }}>
	 *   The Promises
	 * </Fragment>
	 * ```
	 *
	 * @example Animated positioned content with drill:
	 * ```svelte
	 * <Fragment 
	 *   step={1} 
	 *   drillTo="promises/genesis-12-1"
	 *   layout={{ x: 59, y: 9, width: 259, height: 36 }}
	 *   font={{ font_size: 33.6, bold: true }}
	 *   animate="fade"
	 * >
	 *   Genesis 12:1-3
	 * </Fragment>
	 * ```
	 *
	 * @example Lines/shapes (inline-styled child):
	 * ```svelte
	 * <Fragment step={3}>
	 *   <div class="horizontal-line" style="left: 74px; top: 46px; ..."></div>
	 * </Fragment>
	 * ```
	 */
	interface Props {
		/** Step number (1-indexed) when this content becomes visible. Omit for always-visible content. */
		step?: number;
		/** Appear with the previous step (no separate click needed) */
		/*** 
		 * TODO withPrev animates correctly but not removed from count and still requires a click
		 * Ideally solve by removing and allowing steps with same index.
		 * With that, allow steps with decimal indices to insert in between without reordering
		 */
		withPrev?: boolean;
		/** Like withPrev but with 500ms animation delay */
		afterPrev?: boolean;
		/**
		 * Route to drill into when clicked (e.g., `"promises/genesis-12-1"`).
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
		/** Position and dimensions for absolute placement within the slide canvas. */
		layout?: BoxLayout;
		/** Font styling (size, weight, color, alignment). */
		font?: BoxFont;
		/** Background fill color. */
		fill?: string;
		/** Border styling. */
		line?: BoxLine;
		/** Z-index for layering. */
		zIndex?: number;
		/** Entrance animation when fragment becomes visible. */
		animate?: AnimationType;
		children: import('svelte').Snippet;
	}

	let {
		step,
		withPrev = false,
		afterPrev = false,
		drillTo,
		returnHere = false,
		layout,
		font,
		fill,
		line,
		zIndex = 0,
		animate = 'fade',
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

	// Build inline styles when layout is provided
	const computedStyle = $derived(() => {
		if (!layout) return '';

		let style = `
			position: absolute;
			left: ${layout.x}px;
			top: ${layout.y}px;
			width: ${layout.width}px;
			height: ${layout.height}px;
			z-index: ${zIndex};
		`;

		if (layout.rotation) {
			style += `transform: rotate(${layout.rotation}deg);`;
		}

		// Font styles
		if (font) {
			if (font.font_size) style += `font-size: ${font.font_size}px;`;
			if (font.bold) style += 'font-weight: bold;';
			if (font.italic) style += 'font-style: italic;';
			if (font.color) style += `color: ${font.color};`;
			if (font.font_name) style += `font-family: "${font.font_name}", sans-serif;`;
			if (font.alignment) style += `text-align: ${font.alignment};`;
		}

		// Fill
		if (fill) {
			style += `background-color: ${fill};`;
		}

		// Border
		if (line) {
			if (line.color) style += `border-color: ${line.color};`;
			if (line.width) style += `border-width: ${line.width}px; border-style: solid;`;
		}

		return style;
	});

	function handleClick() {
		if (drillTo && visible) {
			navigation.drillInto(drillTo, 0, returnHere);
		}
	}
</script>

{#if visible}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class:fragment-positioned={layout}
		class:drillable={drillTo}
		class:animate-fade={animate === 'fade'}
		class:animate-fly-up={animate === 'fly-up'}
		class:animate-fly-down={animate === 'fly-down'}
		class:animate-fly-left={animate === 'fly-left'}
		class:animate-fly-right={animate === 'fly-right'}
		class:animate-scale={animate === 'scale'}
		style="{computedStyle()}animation-delay: {autoDelay}ms;"
		onclick={drillTo ? handleClick : undefined}
	>
		{@render children()}
	</div>
{/if}

<style>
	/* Positioned fragment styling (when layout is provided) */
	.fragment-positioned {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		overflow: hidden;
		white-space: nowrap;
	}

	/* Drillable styling */
	.drillable {
		cursor: pointer;
	}
	.drillable:hover {
		outline: 2px solid rgba(59, 130, 246, 0.6);
		outline-offset: 3px;
		border-radius: 4px;
	}

	/* ========== CSS Animations ========== */
	
	/* Fade */
	.animate-fade {
		animation: fragmentFadeIn 0.5s ease-out both;
	}
	@keyframes fragmentFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	/* Fly Up */
	.animate-fly-up {
		animation: fragmentFlyUp 0.3s ease-out both;
	}
	@keyframes fragmentFlyUp {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Fly Down */
	.animate-fly-down {
		animation: fragmentFlyDown 0.3s ease-out both;
	}
	@keyframes fragmentFlyDown {
		from { opacity: 0; transform: translateY(-20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Fly Left */
	.animate-fly-left {
		animation: fragmentFlyLeft 0.3s ease-out both;
	}
	@keyframes fragmentFlyLeft {
		from { opacity: 0; transform: translateX(20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	/* Fly Right */
	.animate-fly-right {
		animation: fragmentFlyRight 0.3s ease-out both;
	}
	@keyframes fragmentFlyRight {
		from { opacity: 0; transform: translateX(-20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	/* Scale */
	.animate-scale {
		animation: fragmentScale 0.3s ease-out both;
	}
	@keyframes fragmentScale {
		from { opacity: 0; transform: scale(0.9); }
		to { opacity: 1; transform: scale(1); }
	}
</style>
