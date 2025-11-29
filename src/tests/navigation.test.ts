/**
 * Navigation Store Unit Tests
 * 
 * Tests the core PowerPoint-like presentation navigation functionality:
 * 
 * KEY FEATURES TESTED:
 * 1. Multi-slide navigation with fragment tracking per slide
 * 2. Drill-and-return (Custom Show) functionality with stack-based state
 * 3. State preservation when jumping between slides  
 * 4. Persistence to localStorage for page refresh survival
 * 5. Proper restoration of slide fragment positions after drill return
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { get } from 'svelte/store';

// We need to import after mocks are set up in setup.ts
let navigation: typeof import('$lib/stores/navigation').navigation;
let currentFragment: typeof import('$lib/stores/navigation').currentFragment;
let currentSlide: typeof import('$lib/stores/navigation').currentSlide;
let canReturn: typeof import('$lib/stores/navigation').canReturn;
let goto: ReturnType<typeof vi.fn>;

beforeEach(async () => {
	// Clear module cache to get fresh store instance
	vi.resetModules();
	
	// Re-import to get fresh instances
	const navModule = await import('$lib/stores/navigation');
	navigation = navModule.navigation;
	currentFragment = navModule.currentFragment;
	currentSlide = navModule.currentSlide;
	canReturn = navModule.canReturn;
	
	const appNav = await import('$app/navigation');
	goto = appNav.goto as ReturnType<typeof vi.fn>;
	
	// Reset navigation state
	navigation.reset();
});

describe('Navigation Store - Initialization', () => {
	it('initializes with correct slide and fragment counts', () => {
		navigation.init('life', [9, 15, 12]);
		
		const state = get(navigation);
		expect(state.current.presentation).toBe('life');
		expect(state.current.slide).toBe(0);
		expect(state.current.fragment).toBe(0);
		expect(state.maxSlide).toBe(2); // 3 slides, 0-indexed max
		expect(state.maxFragment).toBe(9); // First slide has 9 fragments
		expect(state.slideFragmentCounts).toEqual([9, 15, 12]);
		expect(state.slideFragments).toEqual([0, 0, 0]); // All start at 0
	});

	it('persists state to localStorage on init', () => {
		navigation.init('life', [9, 15, 12]);
		
		expect(localStorage.setItem).toHaveBeenCalled();
		const savedData = JSON.parse(
			(localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0][1]
		);
		expect(savedData.current.presentation).toBe('life');
	});
});

describe('Navigation Store - Fragment Navigation', () => {
	beforeEach(() => {
		navigation.init('life', [9, 15, 12]);
	});

	it('advances fragment with next()', () => {
		navigation.next();
		expect(get(currentFragment)).toBe(1);
		
		navigation.next();
		expect(get(currentFragment)).toBe(2);
	});

	it('goes back fragment with prev()', () => {
		navigation.next();
		navigation.next();
		navigation.prev();
		
		expect(get(currentFragment)).toBe(1);
	});

	it('updates slideFragments array when navigating', () => {
		navigation.next();
		navigation.next();
		navigation.next(); // Now at fragment 3
		
		const state = get(navigation);
		expect(state.slideFragments[0]).toBe(3); // Slide 0 remembers fragment 3
	});

	it('does not go below fragment 0', () => {
		navigation.prev();
		expect(get(currentFragment)).toBe(0);
	});

	it('persists state after each navigation', () => {
		navigation.next();
		
		expect(localStorage.setItem).toHaveBeenCalled();
	});
});

describe('Navigation Store - Multi-Slide Navigation', () => {
	beforeEach(() => {
		navigation.init('life', [9, 15, 12]);
	});

	it('advances to next slide when fragments exhausted', () => {
		// Go through all 9 fragments of slide 0
		for (let i = 0; i < 9; i++) {
			navigation.next();
		}
		expect(get(currentSlide)).toBe(0);
		expect(get(currentFragment)).toBe(9);
		
		// One more should advance to slide 1
		navigation.next();
		expect(get(currentSlide)).toBe(1);
		expect(get(currentFragment)).toBe(0);
	});

	it('goes to previous slide and restores saved fragment position', () => {
		// Advance to fragment 5 on slide 0
		for (let i = 0; i < 5; i++) navigation.next();
		expect(get(currentFragment)).toBe(5);
		
		// Jump to slide 1
		navigation.goToSlide(1);
		expect(get(currentSlide)).toBe(1);
		
		// Advance some fragments on slide 1
		navigation.next();
		navigation.next();
		
		// Go back to slide 0 - should restore fragment 5
		navigation.goToSlide(0);
		expect(get(currentSlide)).toBe(0);
		expect(get(currentFragment)).toBe(5); // Preserved!
	});

	it('preserves per-slide fragment positions when jumping', () => {
		// Set up fragments on multiple slides
		navigation.next(); navigation.next(); navigation.next(); // Slide 0: fragment 3
		navigation.goToSlide(1);
		navigation.next(); navigation.next(); // Slide 1: fragment 2
		navigation.goToSlide(2);
		navigation.next(); // Slide 2: fragment 1
		
		// Verify each slide remembers its position
		navigation.goToSlide(0);
		expect(get(currentFragment)).toBe(3);
		
		navigation.goToSlide(1);
		expect(get(currentFragment)).toBe(2);
		
		navigation.goToSlide(2);
		expect(get(currentFragment)).toBe(1);
	});

	it('clamps goToSlide within valid range', () => {
		navigation.goToSlide(100);
		expect(get(currentSlide)).toBe(2); // Max is 2
		
		navigation.goToSlide(-5);
		expect(get(currentSlide)).toBe(0); // Min is 0
	});
});

describe('Navigation Store - Drill and Return (Custom Shows)', () => {
	beforeEach(() => {
		navigation.init('life', [9, 15, 12]);
	});

	it('pushes current state to stack when drilling', () => {
		// Navigate to slide 0, fragment 5
		for (let i = 0; i < 5; i++) navigation.next();
		
		navigation.drillInto('life/ecclesiastes.3.19');
		
		const state = get(navigation);
		expect(state.stack.length).toBe(1);
		expect(state.stack[0].presentation).toBe('life');
		expect(state.stack[0].slide).toBe(0);
		expect(state.stack[0].fragment).toBe(5);
	});

	it('saves slideFragments when drilling', () => {
		// Set up position
		navigation.next(); navigation.next(); navigation.next();
		navigation.goToSlide(1);
		navigation.next();
		
		navigation.drillInto('life/ecclesiastes.3.19');
		
		const state = get(navigation);
		expect(state.stack[0].slideFragments).toEqual([3, 1, 0]);
	});

	it('calls goto with correct route on drill', () => {
		navigation.drillInto('life/ecclesiastes.3.19');
		
		expect(goto).toHaveBeenCalledWith('/life/ecclesiastes.3.19');
	});

	it('sets canReturn to true when in a drill', () => {
		expect(get(canReturn)).toBe(false);
		
		navigation.drillInto('life/ecclesiastes.3.19');
		
		expect(get(canReturn)).toBe(true);
	});

	it('pops state from stack on return', () => {
		// Navigate to fragment 5
		for (let i = 0; i < 5; i++) navigation.next();
		
		navigation.drillInto('life/ecclesiastes.3.19');
		navigation.returnFromDrill();
		
		const state = get(navigation);
		expect(state.stack.length).toBe(0);
		expect(state.current.presentation).toBe('life');
		expect(state.current.fragment).toBe(5);
	});

	it('restores slideFragments on return from drill', () => {
		// Set up: slide 0 at fragment 5, slide 1 at fragment 3
		for (let i = 0; i < 5; i++) navigation.next();
		navigation.goToSlide(1);
		for (let i = 0; i < 3; i++) navigation.next();
		
		// Drill
		navigation.drillInto('life/hebrews.9.27');
		
		// Return
		navigation.returnFromDrill();
		
		const state = get(navigation);
		expect(state.slideFragments).toEqual([5, 3, 0]);
		
		// Verify jumping to slide 0 shows fragment 5
		navigation.goToSlide(0);
		expect(get(currentFragment)).toBe(5);
	});

	it('sets isReturningFromDrill flag to prevent init reset', () => {
		navigation.drillInto('life/ecclesiastes.3.19');
		navigation.returnFromDrill();
		
		const state = get(navigation);
		expect(state.isReturningFromDrill).toBe(true);
	});

	it('supports nested drills (drill within drill)', () => {
		navigation.drillInto('life/ecclesiastes.3.19');
		navigation.drillInto('some/nested/drill');
		
		expect(get(navigation).stack.length).toBe(2);
		
		navigation.returnFromDrill();
		expect(get(navigation).stack.length).toBe(1);
		expect(get(navigation).current.presentation).toBe('life/ecclesiastes.3.19');
		
		navigation.returnFromDrill();
		expect(get(navigation).stack.length).toBe(0);
		expect(get(navigation).current.presentation).toBe('life');
	});

	it('does nothing on returnFromDrill when stack is empty', () => {
		const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		
		navigation.returnFromDrill();
		
		expect(consoleSpy).toHaveBeenCalledWith('[Navigation] Cannot return - stack is empty');
		consoleSpy.mockRestore();
	});
});

describe('Navigation Store - Complete Drill Flow (Bug Fix Verification)', () => {
	/**
	 * This test verifies the bug fix for the issue:
	 * "if I am on page1, drill into Spirit (ecclesiastes3.19), auto return works, 
	 * then if skip to Slide 2, Drill into Judgement and return, 
	 * Use the button to go back to slide one, 
	 * the last thing showing is 'Animals Body' which is before Spirit."
	 * 
	 * The fix was to save slideFragments to the stack when drilling 
	 * and restore them on return.
	 */
	it('preserves slide fragment positions through multiple drill cycles', () => {
		navigation.init('life', [9, 15, 12]);
		
		// Step 1: On slide 0, advance to fragment 5 (Spirit visible)
		for (let i = 0; i < 5; i++) navigation.next();
		expect(get(currentFragment)).toBe(5);
		
		// Step 2: Drill into Ecclesiastes
		navigation.drillInto('life/ecclesiastes.3.19');
		
		// Step 3: Simulate auto-return (would happen at end of drill)
		navigation.returnFromDrill();
		
		// After return, we need to re-init for the presentation
		// (simulating what the page component does)
		const state = get(navigation);
		expect(state.isReturningFromDrill).toBe(true);
		navigation.init('life', [9, 15, 12]); // This preserves state due to flag
		
		// Verify still at fragment 5
		expect(get(currentFragment)).toBe(5);
		expect(get(currentSlide)).toBe(0);
		
		// Step 4: Skip to slide 2 (Judgment)
		navigation.goToSlide(1);
		expect(get(currentSlide)).toBe(1);
		
		// Advance to fragment 11 where Judgment drill is
		for (let i = 0; i < 11; i++) navigation.next();
		
		// Step 5: Drill into Hebrews 9:27
		navigation.drillInto('life/hebrews.9.27');
		
		// Step 6: Return from drill
		navigation.returnFromDrill();
		navigation.init('life', [9, 15, 12]); // Re-init as page would
		
		// Step 7: Go back to slide 0 - should be at fragment 5!
		navigation.goToSlide(0);
		
		expect(get(currentSlide)).toBe(0);
		expect(get(currentFragment)).toBe(5); // Spirit should be visible!
	});
});

describe('Navigation Store - Persistence', () => {
	it('restores from localStorage on init if matching presentation', () => {
		// Simulate saved state
		const savedState = {
			current: { presentation: 'life', slide: 1, fragment: 7 },
			stack: [],
			slideFragments: [5, 7, 0],
			slideFragmentCounts: [9, 15, 12],
			maxSlide: 2
		};
		(localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
			JSON.stringify(savedState)
		);
		
		navigation.init('life', [9, 15, 12]);
		
		const state = get(navigation);
		expect(state.current.slide).toBe(1);
		expect(state.current.fragment).toBe(7);
		expect(state.slideFragments).toEqual([5, 7, 0]);
	});

	it('does not restore from localStorage for different presentation', () => {
		const savedState = {
			current: { presentation: 'salvation', slide: 2, fragment: 3 },
			stack: [],
			slideFragments: [1, 2, 3],
			slideFragmentCounts: [5, 5, 5],
			maxSlide: 2
		};
		(localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
			JSON.stringify(savedState)
		);
		
		navigation.init('life', [9, 15, 12]); // Different presentation
		
		const state = get(navigation);
		expect(state.current.slide).toBe(0); // Fresh start
		expect(state.current.fragment).toBe(0);
	});

	it('clearPresentation removes localStorage and resets state', () => {
		navigation.init('life', [9, 15, 12]);
		navigation.next();
		navigation.next();
		
		// Set up localStorage mock to return matching presentation
		(localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
			JSON.stringify({ current: { presentation: 'life' } })
		);
		
		navigation.clearPresentation('life');
		
		// Verify state is reset
		const state = get(navigation);
		expect(state.current.fragment).toBe(0);
		expect(state.current.presentation).toBe('');
	});
});

describe('Navigation Store - Init with Drill Return', () => {
	it('preserves position when isReturningFromDrill is true', () => {
		navigation.init('life', [9, 15, 12]);
		
		// Navigate and drill
		for (let i = 0; i < 7; i++) navigation.next();
		navigation.drillInto('life/test');
		
		// Return sets flag
		navigation.returnFromDrill();
		
		let state = get(navigation);
		expect(state.isReturningFromDrill).toBe(true);
		expect(state.current.fragment).toBe(7);
		
		// Re-init (as page component would do)
		navigation.init('life', [9, 15, 12]);
		
		// Should preserve position
		state = get(navigation);
		expect(state.current.fragment).toBe(7);
		expect(state.isReturningFromDrill).toBe(false); // Flag cleared
	});
});

describe('Navigation Store - Route Mapping', () => {
	it('maps life presentation to /life route', () => {
		const route = navigation.getRouteForPresentation('life');
		expect(route).toBe('/life');
	});

	it('maps drill routes correctly', () => {
		const route = navigation.getRouteForPresentation('life/ecclesiastes.3.19');
		expect(route).toBe('/life/ecclesiastes.3.19');
	});
});

describe('Navigation Store - Auto-Drill Functionality', () => {
	/**
	 * Tests for auto-drill behavior:
	 * When at the last fragment of a drill and that fragment has a registered drillTo,
	 * pressing next() should automatically navigate to the target drill
	 * instead of requiring a click.
	 */
	
	beforeEach(() => {
		navigation.init('life', [9, 15, 12]);
	});

	it('registers drill target when registerDrillTarget is called', () => {
		navigation.registerDrillTarget(5, 'life/1thessalonians.5.23');
		
		const state = get(navigation);
		expect(state.drillTargets[5]).toBe('life/1thessalonians.5.23');
	});

	it('unregisters drill target when unregisterDrillTarget is called', () => {
		navigation.registerDrillTarget(5, 'life/1thessalonians.5.23');
		navigation.unregisterDrillTarget(5);
		
		const state = get(navigation);
		expect(state.drillTargets[5]).toBeUndefined();
	});

	it('auto-drills when next() is called at maxFragment with registered drillTarget', () => {
		// Simulate being in a drill (ecclesiastes) with fragment 5 having a drillTo
		navigation.drillInto('life/ecclesiastes.3.19');
		navigation.setMaxFragment(5);
		navigation.registerDrillTarget(5, 'life/1thessalonians.5.23');
		
		// Advance to the last fragment
		for (let i = 0; i < 5; i++) navigation.next();
		expect(get(navigation).current.fragment).toBe(5);
		
		// Next should auto-drill to the target
		navigation.next();
		
		expect(goto).toHaveBeenCalledWith('/life/1thessalonians.5.23');
		expect(get(navigation).current.presentation).toBe('life/1thessalonians.5.23');
		expect(get(navigation).stack.length).toBe(2); // Original + ecclesiastes
	});

	it('clears drillTargets when drilling into new target', () => {
		navigation.registerDrillTarget(5, 'life/1thessalonians.5.23');
		navigation.drillInto('life/test');
		
		const state = get(navigation);
		expect(state.drillTargets).toEqual({});
	});

	it('clears drillTargets when advancing to next slide', () => {
		navigation.init('life', [3, 5]);
		navigation.registerDrillTarget(3, 'life/test');
		
		// Advance through all fragments of slide 0
		for (let i = 0; i < 3; i++) navigation.next();
		
		// Advance to next slide (since no drillTarget at step 3 for slide)
		// Wait - step 3 IS registered, so it should auto-drill
		// Let's adjust the test: register at a step that's NOT the max
		navigation.init('life', [5, 5]);
		navigation.registerDrillTarget(3, 'life/test'); // Not at max (5)
		
		// Advance past the registered step
		for (let i = 0; i < 5; i++) navigation.next();
		
		// Advance to next slide - should clear drillTargets
		navigation.next();
		
		const state = get(navigation);
		expect(state.drillTargets).toEqual({});
	});
});

describe('Navigation Store - Return to Origin', () => {
	/**
	 * Tests for nested drill return behavior:
	 * When at the end of a drill chain, the return should go all the way back
	 * to the original presentation, not to intermediate drills.
	 */
	
	beforeEach(() => {
		navigation.init('life', [9, 15, 12]);
	});

	it('returns to origin when in nested drill and next() is called at end', () => {
		// Set up: life -> ecclesiastes -> thessalonians
		// Fragment 8 drills to ecclesiastes
		for (let i = 0; i < 8; i++) navigation.next();
		navigation.drillInto('life/ecclesiastes.3.19');
		
		// In ecclesiastes, set up with auto-drill to thessalonians
		navigation.setMaxFragment(5);
		navigation.registerDrillTarget(5, 'life/1thessalonians.5.23');
		for (let i = 0; i < 5; i++) navigation.next();
		
		// Auto-drill to thessalonians
		navigation.next();
		expect(get(navigation).stack.length).toBe(2);
		
		// In thessalonians, no drillTo on last fragment
		navigation.setMaxFragment(3);
		for (let i = 0; i < 3; i++) navigation.next();
		
		// Next should return all the way to 'life', not to 'ecclesiastes'
		navigation.next();
		
		const state = get(navigation);
		expect(state.current.presentation).toBe('life');
		expect(state.current.fragment).toBe(8); // Where we drilled from originally
		expect(state.stack.length).toBe(0);
		expect(goto).toHaveBeenLastCalledWith('/life');
	});

	it('returnFromDrill with returnToOrigin=true pops all states', () => {
		// Create a 3-level deep drill stack
		navigation.drillInto('life/level1');
		navigation.drillInto('life/level2');
		navigation.drillInto('life/level3');
		
		expect(get(navigation).stack.length).toBe(3);
		
		// Return to origin should pop all 3
		navigation.returnFromDrill(true);
		
		const state = get(navigation);
		expect(state.stack.length).toBe(0);
		expect(state.current.presentation).toBe('life');
	});

	it('returnFromDrill with returnToOrigin=false pops only one state', () => {
		// Create a 3-level deep drill stack
		navigation.drillInto('life/level1');
		navigation.drillInto('life/level2');
		navigation.drillInto('life/level3');
		
		expect(get(navigation).stack.length).toBe(3);
		
		// Normal return should pop only one
		navigation.returnFromDrill(false);
		
		const state = get(navigation);
		expect(state.stack.length).toBe(2);
		expect(state.current.presentation).toBe('life/level2');
	});

	it('preserves original position through nested drill chain', () => {
		// Navigate to a specific position
		for (let i = 0; i < 5; i++) navigation.next();
		navigation.goToSlide(1);
		for (let i = 0; i < 7; i++) navigation.next();
		
		// Save expected return position
		const expectedSlide = get(navigation).current.slide;
		const expectedFragment = get(navigation).current.fragment;
		
		// Drill through multiple levels
		navigation.drillInto('life/drill1');
		navigation.setMaxFragment(3);
		navigation.drillInto('life/drill2');
		navigation.setMaxFragment(2);
		
		// Return to origin
		navigation.returnFromDrill(true);
		
		// Simulate page re-init
		navigation.init('life', [9, 15, 12]);
		
		const state = get(navigation);
		expect(state.current.slide).toBe(expectedSlide);
		expect(state.current.fragment).toBe(expectedFragment);
	});

	it('always returns to origin from any drill depth via next()', () => {
		// Even a single-level drill should return to origin
		navigation.drillInto('life/drill1');
		navigation.setMaxFragment(2);
		
		// Advance to end
		navigation.next();
		navigation.next();
		
		// Next should return to origin
		navigation.next();
		
		const state = get(navigation);
		expect(state.current.presentation).toBe('life');
		expect(state.stack.length).toBe(0);
	});
});
