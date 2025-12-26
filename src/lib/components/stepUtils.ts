/**
 * Shared utilities for step-based fragment components.
 * 
 * Step numbers use decimal notation for animation sequencing:
 * - Integer part (floor) = the click number when content becomes visible
 * - Decimal part = animation delay within that click (e.g., .1 = 500ms, .2 = 1000ms)
 * 
 * @example
 * step={14}     // Appears on click 14, no delay
 * step={14.1}   // Appears on click 14, 500ms delay
 * step={14.2}   // Appears on click 14, 1000ms delay
 */

import type { SlideContext } from './Slide.svelte';

/** Default delay per decimal increment (in milliseconds) */
export const DEFAULT_DELAY_PER_DECIMAL = 500;

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
