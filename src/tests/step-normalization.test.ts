/**
 * Step Normalization Tests
 * 
 * Tests the step normalization system that:
 * 1. Maps author steps with gaps (1, 5, 19) to consecutive integers (1, 2, 3)
 * 2. Preserves decimal parts for animation delays (19.1 → 3.1)
 * 3. Provides reverse lookup (normalized → original) for debug overlay
 * 
 * This is the core of allowing authors to use any step numbers while
 * navigation uses consecutive integers internally.
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
	getEffectiveStep,
	getAnimationDelay,
	shouldBeVisible,
	DEFAULT_DELAY_PER_DECIMAL
} from '$lib/components/stepUtils';

describe('getEffectiveStep', () => {
	it('returns integer part of step number', () => {
		expect(getEffectiveStep(5)).toBe(5);
		expect(getEffectiveStep(14)).toBe(14);
		expect(getEffectiveStep(1)).toBe(1);
	});

	it('floors decimal steps to get click number', () => {
		expect(getEffectiveStep(5.1)).toBe(5);
		expect(getEffectiveStep(5.2)).toBe(5);
		expect(getEffectiveStep(5.9)).toBe(5);
		expect(getEffectiveStep(14.3)).toBe(14);
	});
});

describe('getAnimationDelay', () => {
	it('returns 0 for integer steps', () => {
		expect(getAnimationDelay(1)).toBe(0);
		expect(getAnimationDelay(5)).toBe(0);
		expect(getAnimationDelay(14)).toBe(0);
	});

	it('calculates delay from decimal part (0.1 = 500ms)', () => {
		expect(getAnimationDelay(5.1)).toBe(500);
		expect(getAnimationDelay(14.1)).toBe(500);
	});

	it('scales delay with decimal value (0.2 = 1000ms)', () => {
		expect(getAnimationDelay(5.2)).toBe(1000);
		expect(getAnimationDelay(5.3)).toBe(1500);
	});

	it('uses explicit delay when provided', () => {
		expect(getAnimationDelay(5.1, 200)).toBe(200);
		expect(getAnimationDelay(5.2, 100)).toBe(100);
	});

	it('allows custom delay per decimal', () => {
		expect(getAnimationDelay(5.1, undefined, 300)).toBe(300);
		expect(getAnimationDelay(5.2, undefined, 300)).toBe(600);
	});
});

describe('shouldBeVisible', () => {
	it('returns true when step is undefined (static content)', () => {
		expect(shouldBeVisible(undefined, 0)).toBe(true);
		expect(shouldBeVisible(undefined, 5)).toBe(true);
	});

	it('returns false when currentFragment < step', () => {
		expect(shouldBeVisible(5, 0)).toBe(false);
		expect(shouldBeVisible(5, 4)).toBe(false);
		expect(shouldBeVisible(10, 9)).toBe(false);
	});

	it('returns true when currentFragment >= step', () => {
		expect(shouldBeVisible(5, 5)).toBe(true);
		expect(shouldBeVisible(5, 6)).toBe(true);
		expect(shouldBeVisible(1, 10)).toBe(true);
	});

	it('uses effective (integer) step for decimal steps', () => {
		// 5.1 becomes effective step 5
		expect(shouldBeVisible(5.1, 4)).toBe(false);
		expect(shouldBeVisible(5.1, 5)).toBe(true);
		expect(shouldBeVisible(5.2, 5)).toBe(true);
	});
});

describe('Step Map Building (simulated)', () => {
	/**
	 * Simulates the step map building logic from Slide.svelte.
	 * This tests the algorithm without needing component rendering.
	 */
	function buildStepMaps(steps: number[]): {
		stepMap: Map<number, number>;
		reverseStepMap: Map<number, number>;
	} {
		const uniqueSteps = [...new Set(steps.map(s => Math.floor(s)))];
		const sortedSteps = uniqueSteps.sort((a, b) => a - b);
		
		const stepMap = new Map<number, number>();
		const reverseStepMap = new Map<number, number>();
		
		sortedSteps.forEach((step, index) => {
			const normalized = index + 1;
			stepMap.set(step, normalized);
			reverseStepMap.set(normalized, step);
		});
		
		return { stepMap, reverseStepMap };
	}

	function getNormalizedStep(authorStep: number, stepMap: Map<number, number>): number {
		const intPart = Math.floor(authorStep);
		const decimalPart = authorStep - intPart;
		const normalizedInt = stepMap.get(intPart) ?? intPart;
		return normalizedInt + decimalPart;
	}

	function getOriginalStep(normalizedStep: number, reverseStepMap: Map<number, number>): number {
		return reverseStepMap.get(normalizedStep) ?? normalizedStep;
	}

	it('maps consecutive steps to themselves', () => {
		const { stepMap, reverseStepMap } = buildStepMaps([1, 2, 3, 4, 5]);
		
		expect(stepMap.get(1)).toBe(1);
		expect(stepMap.get(2)).toBe(2);
		expect(stepMap.get(3)).toBe(3);
		expect(stepMap.get(4)).toBe(4);
		expect(stepMap.get(5)).toBe(5);
		
		// Reverse should also match
		expect(reverseStepMap.get(1)).toBe(1);
		expect(reverseStepMap.get(5)).toBe(5);
	});

	it('normalizes steps with gaps to consecutive integers', () => {
		const { stepMap, reverseStepMap } = buildStepMaps([1, 5, 19]);
		
		expect(stepMap.get(1)).toBe(1);
		expect(stepMap.get(5)).toBe(2);
		expect(stepMap.get(19)).toBe(3);
		
		expect(reverseStepMap.get(1)).toBe(1);
		expect(reverseStepMap.get(2)).toBe(5);
		expect(reverseStepMap.get(3)).toBe(19);
	});

	it('handles unsorted input correctly', () => {
		const { stepMap } = buildStepMaps([19, 1, 5]);
		
		// Should sort and normalize
		expect(stepMap.get(1)).toBe(1);
		expect(stepMap.get(5)).toBe(2);
		expect(stepMap.get(19)).toBe(3);
	});

	it('handles large gaps in step numbers', () => {
		const { stepMap, reverseStepMap } = buildStepMaps([10, 50, 100, 500]);
		
		expect(stepMap.get(10)).toBe(1);
		expect(stepMap.get(50)).toBe(2);
		expect(stepMap.get(100)).toBe(3);
		expect(stepMap.get(500)).toBe(4);
		
		expect(reverseStepMap.get(1)).toBe(10);
		expect(reverseStepMap.get(4)).toBe(500);
	});

	it('preserves decimal part when normalizing', () => {
		const { stepMap } = buildStepMaps([1, 5, 19]);
		
		// 19.1 should become 3.1
		expect(getNormalizedStep(19.1, stepMap)).toBeCloseTo(3.1, 5);
		expect(getNormalizedStep(19.2, stepMap)).toBeCloseTo(3.2, 5);
		
		// 5.1 should become 2.1
		expect(getNormalizedStep(5.1, stepMap)).toBeCloseTo(2.1, 5);
	});

	it('handles decimal steps in registration (floors to integer)', () => {
		// When steps 1, 5, 5.1, 5.2, 19 are registered,
		// only unique integers [1, 5, 19] should be in the map
		const { stepMap, reverseStepMap } = buildStepMaps([1, 5, 5.1, 5.2, 19]);
		
		expect(stepMap.size).toBe(3);
		expect(stepMap.get(1)).toBe(1);
		expect(stepMap.get(5)).toBe(2);
		expect(stepMap.get(19)).toBe(3);
	});

	it('correctly reverses normalized steps to original', () => {
		const { stepMap, reverseStepMap } = buildStepMaps([3, 7, 15, 22]);
		
		// normalized 1 → original 3
		expect(getOriginalStep(1, reverseStepMap)).toBe(3);
		// normalized 2 → original 7
		expect(getOriginalStep(2, reverseStepMap)).toBe(7);
		// normalized 3 → original 15
		expect(getOriginalStep(3, reverseStepMap)).toBe(15);
		// normalized 4 → original 22
		expect(getOriginalStep(4, reverseStepMap)).toBe(22);
	});

	it('returns normalized step unchanged if not in reverse map', () => {
		const { reverseStepMap } = buildStepMaps([1, 5, 19]);
		
		// Step 10 was never registered, should return as-is
		expect(getOriginalStep(10, reverseStepMap)).toBe(10);
	});
});

describe('Debug Overlay Integration (simulated)', () => {
	/**
	 * Simulates the debug overlay showing original steps.
	 * Tests the end-to-end flow from author steps to display.
	 */
	
	function simulateDebugOverlay(
		authorSteps: number[],
		currentNormalizedFragment: number
	): { normalizedFragment: number; originalStep: number } {
		// Build maps like Slide.svelte does
		const uniqueSteps = [...new Set(authorSteps.map(s => Math.floor(s)))];
		const sortedSteps = uniqueSteps.sort((a, b) => a - b);
		
		const reverseStepMap = new Map<number, number>();
		sortedSteps.forEach((step, index) => {
			reverseStepMap.set(index + 1, step);
		});
		
		const originalStep = reverseStepMap.get(currentNormalizedFragment) ?? currentNormalizedFragment;
		
		return {
			normalizedFragment: currentNormalizedFragment,
			originalStep
		};
	}

	it('shows same value when steps are consecutive', () => {
		const result = simulateDebugOverlay([1, 2, 3, 4, 5], 3);
		expect(result.normalizedFragment).toBe(3);
		expect(result.originalStep).toBe(3);
	});

	it('shows original step when steps have gaps', () => {
		// Steps: 1, 5, 19 → normalized: 1, 2, 3
		// At normalized fragment 3, original step is 19
		const result = simulateDebugOverlay([1, 5, 19], 3);
		expect(result.normalizedFragment).toBe(3);
		expect(result.originalStep).toBe(19);
	});

	it('shows original step at various positions', () => {
		const authorSteps = [10, 25, 30, 45, 100];
		
		expect(simulateDebugOverlay(authorSteps, 1).originalStep).toBe(10);
		expect(simulateDebugOverlay(authorSteps, 2).originalStep).toBe(25);
		expect(simulateDebugOverlay(authorSteps, 3).originalStep).toBe(30);
		expect(simulateDebugOverlay(authorSteps, 4).originalStep).toBe(45);
		expect(simulateDebugOverlay(authorSteps, 5).originalStep).toBe(100);
	});

	it('handles fragment 0 (before first step)', () => {
		const result = simulateDebugOverlay([1, 5, 19], 0);
		// No step registered for 0, returns 0 as fallback
		expect(result.originalStep).toBe(0);
	});
});

describe('Global Registry (simulated)', () => {
	/**
	 * Tests the global original step registry pattern used by DebugOverlay.
	 */
	
	type OriginalStepLookup = (normalizedStep: number) => number;
	
	function createRegistry() {
		const registry = new Map<string, OriginalStepLookup>();
		
		function register(presentation: string, slideIndex: number, lookup: OriginalStepLookup) {
			registry.set(`${presentation}:${slideIndex}`, lookup);
		}
		
		function unregister(presentation: string, slideIndex: number) {
			registry.delete(`${presentation}:${slideIndex}`);
		}
		
		function getOriginalStep(presentation: string, slideIndex: number, normalizedStep: number): number {
			const lookup = registry.get(`${presentation}:${slideIndex}`);
			return lookup ? lookup(normalizedStep) : normalizedStep;
		}
		
		return { register, unregister, getOriginalStep };
	}

	it('returns normalized step when no lookup registered', () => {
		const { getOriginalStep } = createRegistry();
		expect(getOriginalStep('demo', 0, 5)).toBe(5);
	});

	it('uses registered lookup function', () => {
		const { register, getOriginalStep } = createRegistry();
		
		// Simulate Slide registering its lookup
		const reverseLookup = (n: number) => {
			const map: Record<number, number> = { 1: 10, 2: 25, 3: 50 };
			return map[n] ?? n;
		};
		
		register('demo', 0, reverseLookup);
		
		expect(getOriginalStep('demo', 0, 1)).toBe(10);
		expect(getOriginalStep('demo', 0, 2)).toBe(25);
		expect(getOriginalStep('demo', 0, 3)).toBe(50);
	});

	it('handles multiple slides independently', () => {
		const { register, getOriginalStep } = createRegistry();
		
		register('demo', 0, (n) => n * 10);
		register('demo', 1, (n) => n * 100);
		
		expect(getOriginalStep('demo', 0, 5)).toBe(50);
		expect(getOriginalStep('demo', 1, 5)).toBe(500);
	});

	it('handles multiple presentations independently', () => {
		const { register, getOriginalStep } = createRegistry();
		
		register('presentation-a', 0, (n) => n + 100);
		register('presentation-b', 0, (n) => n + 200);
		
		expect(getOriginalStep('presentation-a', 0, 5)).toBe(105);
		expect(getOriginalStep('presentation-b', 0, 5)).toBe(205);
	});

	it('cleanup works correctly', () => {
		const { register, unregister, getOriginalStep } = createRegistry();
		
		register('demo', 0, (n) => n * 10);
		expect(getOriginalStep('demo', 0, 5)).toBe(50);
		
		unregister('demo', 0);
		expect(getOriginalStep('demo', 0, 5)).toBe(5); // Falls back to identity
	});

	it('requires presentation name at registration time (not later)', () => {
		// This test ensures registration happens with a known presentation name,
		// not from a store that might not be initialized yet.
		// The bug was: Slide called get(currentPresentation) at mount time,
		// but navigation.init() sets the presentation name AFTER slides mount.
		// This caused debug overlay to not display the number of the actual step
		// but instead always show the normalized fragment.
		// Fix: PresentationProvider passes name via context, available at mount.
		
		const { register, getOriginalStep } = createRegistry();
		
		// Simulating the WRONG approach: empty presentation name at mount time
		const emptyPresentationName = ''; // This is what get(currentPresentation) returned
		register(emptyPresentationName, 0, (n) => n * 10);
		
		// Lookup with correct name fails because it was registered with empty string
		expect(getOriginalStep('reasoning', 0, 5)).toBe(5); // Falls back, not 50!
		
		// Lookup with empty string works but is useless
		expect(getOriginalStep('', 0, 5)).toBe(50);
	});

	it('registration with context-provided name works correctly', () => {
		// This test shows the CORRECT approach: use presentation name from context
		const { register, getOriginalStep } = createRegistry();
		
		// Simulating correct approach: name from PresentationProvider context
		const contextPresentationName = 'reasoning'; // Available at mount via context
		register(contextPresentationName, 0, (n) => n * 10);
		
		// Lookup with correct name succeeds
		expect(getOriginalStep('reasoning', 0, 5)).toBe(50);
	});
});
