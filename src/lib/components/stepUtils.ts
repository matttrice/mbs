/**
 * Shared utilities for step-based fragment components.
 * 
 * Step numbers use decimal notation for animation sequencing:
 * - Integer part (floor) = the click number when content becomes visible
 * - Decimal part = animation delay within that click (e.g., .1 = 500ms, .2 = 1000ms)
 * 
 * Step normalization:
 * - Authors can use any step numbers (with gaps like 1, 5, 19)
 * - Slide context normalizes them to consecutive integers (1, 2, 3)
 * - Decimals are preserved for animation delay (19.1 → 3.1)
 * 
 * @example
 * step={14}     // Appears on click 14, no delay
 * step={14.1}   // Appears on click 14, 500ms delay
 * step={14.2}   // Appears on click 14, 1000ms delay
 */

import { get } from 'svelte/store';
import { navigation } from '$lib/stores/navigation';
import type { SlideContext } from './Slide.svelte';

/** Default delay per decimal increment (in milliseconds) */
export const DEFAULT_DELAY_PER_DECIMAL = 500;

/** Duration to wait after animation starts before marking as complete (ms) */
export const ANIMATION_COMPLETE_DELAY = 400;

/**
 * Get the effective step number (integer part) for visibility calculations.
 * The decimal part is used for animation delay, not visibility.
 */
export function getEffectiveStep(step: number): number {
	return Math.floor(step);
}

/**
 * Calculate animation delay based on decimal part of step number.
 * 
 * @param step - The step number (e.g., 14.1, 14.2)
 * @param explicitDelay - If provided, overrides the calculated delay
 * @param delayPerDecimal - Milliseconds per 0.1 increment (default: 500)
 * @returns Delay in milliseconds
 */
export function getAnimationDelay(
	step: number,
	explicitDelay?: number,
	delayPerDecimal: number = DEFAULT_DELAY_PER_DECIMAL
): number {
	// Explicit delay overrides calculation
	if (explicitDelay !== undefined) {
		return explicitDelay;
	}
	
	// Calculate delay from decimal part
	// e.g., 14.1 -> 0.1 -> 1 * 500 = 500ms
	// e.g., 14.2 -> 0.2 -> 2 * 500 = 1000ms
	const decimalPart = step - Math.floor(step);
	const decimalTenths = Math.round(decimalPart * 10);
	return decimalTenths * delayPerDecimal;
}

/**
 * Check if a fragment should be visible based on current fragment position.
 * 
 * @param step - The step number (may include decimal)
 * @param currentFragment - The current fragment position from navigation store
 * @returns true if the fragment should be visible
 */
export function shouldBeVisible(step: number | undefined, currentFragment: number): boolean {
	if (step === undefined) {
		return true; // No step = always visible (static content)
	}
	return currentFragment >= getEffectiveStep(step);
}

/**
 * Register a step with the slide context.
 * Only registers the integer part (floor) since decimals are for animation, not click counting.
 * 
 * @param step - The step number (may include decimal)
 * @param context - The slide context from getSlideContext()
 */
export function registerStepWithContext(step: number | undefined, context: SlideContext | undefined): void {
	if (context && step !== undefined) {
		context.registerStep(getEffectiveStep(step));
	}
}

/**
 * Get the normalized step from context, preserving decimal part.
 * If context is unavailable, returns the original step unchanged.
 * 
 * @param step - The author's step number (may include decimal)
 * @param context - The slide context from getSlideContext()
 * @returns Normalized step with decimal preserved (e.g., 19.1 → 3.1)
 */
export function getNormalizedStep(step: number | undefined, context: SlideContext | undefined): number | undefined {
	if (step === undefined) return undefined;
	if (!context) return step;
	return context.getNormalizedStep(step);
}

/**
 * Get the original author step from context for a normalized step.
 * If context is unavailable, returns the normalized step unchanged.
 * 
 * @param normalizedStep - The normalized step number
 * @param context - The slide context from getSlideContext()
 * @returns Original author step (e.g., 3 → 19 if original steps were [1, 5, 19])
 */
export function getOriginalStep(normalizedStep: number, context: SlideContext | undefined): number {
	if (!context) return normalizedStep;
	return context.getOriginalStep(normalizedStep);
}

// ========== Animation Utilities ==========

/**
 * Check if a fragment's slide is the currently active slide.
 * Used to prevent animations from triggering on inactive slides.
 * 
 * @param slideIndex - The slide index from context (undefined for drill slides)
 * @param currentSlide - The current slide from navigation store
 * @returns true if this is the active slide (or a drill slide)
 */
export function checkIsActiveSlide(slideIndex: number | undefined, currentSlide: number): boolean {
	return slideIndex === undefined || slideIndex === currentSlide;
}

/**
 * Check if a fragment was already revealed before this mount.
 * Uses the stored per-slide fragment position from navigation store.
 * 
 * This handles:
 * - Page reload (localStorage → slideFragments restored)
 * - Drill return (position preserved in store)
 * - Initial load with stored progress
 * 
 * @param effectiveStep - The integer step number for this fragment
 * @param slideIndex - The slide index (undefined for drill slides)
 * @param visibleFallback - Fallback visibility check for test environments
 * @returns true if fragment was already revealed (should skip animation)
 */
export function wasAlreadyRevealed(
	effectiveStep: number,
	slideIndex: number | undefined,
	visibleFallback: boolean
): boolean {
	try {
		const navState = get(navigation);
		const storedPosition = slideIndex !== undefined
			? (navState.slideFragments?.[slideIndex] ?? 0)
			: (navState.current?.fragment ?? 0);
		return storedPosition >= effectiveStep;
	} catch {
		// In test environment, fall back to checking current visibility
		return visibleFallback;
	}
}
