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
		// With pending drill approach, we return to exact position (not fragment+1)
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
		// With pending drill approach, we return to exact position (3, not 4)
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
		
		// With pending drill approach, we return to exact position (not +1)
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
		
		// Step 7: Go back to slide 0 - should be at fragment 5 (exact position restored)
		navigation.goToSlide(0);
		
		expect(get(currentSlide)).toBe(0);
		expect(get(currentFragment)).toBe(5); // Exact position restored
	});
});

describe('Navigation Store - Persistence', () => {
	it('restores from localStorage on init if matching presentation', () => {
		// Simulate saved state using per-presentation key
		const savedState = {
			current: { presentation: 'life', slide: 1, fragment: 7 },
			stack: [],
			slideFragments: [5, 7, 0],
			slideFragmentCounts: [9, 15, 12],
			maxSlide: 2
		};
		localStorage.setItem('mbs-nav-life', JSON.stringify(savedState));
		
		navigation.init('life', [9, 15, 12]);
		
		const state = get(navigation);
		expect(state.current.slide).toBe(1);
		expect(state.current.fragment).toBe(7);
		expect(state.slideFragments).toEqual([5, 7, 0]);
	});

	it('does not restore from localStorage for different presentation', () => {
		// State for salvation stored under its own key
		const savedState = {
			current: { presentation: 'salvation', slide: 2, fragment: 3 },
			stack: [],
			slideFragments: [1, 2, 3],
			slideFragmentCounts: [5, 5, 5],
			maxSlide: 2
		};
		localStorage.setItem('mbs-nav-salvation', JSON.stringify(savedState));
		
		navigation.init('life', [9, 15, 12]); // Different presentation - no mbs-nav-life key exists
		
		const state = get(navigation);
		expect(state.current.slide).toBe(0); // Fresh start - no persisted state for 'life'
		expect(state.current.fragment).toBe(0);
	});

	it('clearPresentation removes localStorage and resets state', () => {
		navigation.init('life', [9, 15, 12]);
		navigation.setAutoDrillAll(false);
		navigation.next();
		navigation.next();
		
		// Verify state was stored under per-presentation key
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'mbs-nav-life',
			expect.any(String)
		);
		
		navigation.clearPresentation('life');
		
		// Verify localStorage was cleared for this presentation
		expect(localStorage.removeItem).toHaveBeenCalledWith('mbs-nav-life');
		
		// Verify state is reset
		const state = get(navigation);
		expect(state.current.fragment).toBe(0);
		expect(state.current.presentation).toBe('');
		expect(state.autoDrillAll).toBe(false);
	});

	it('persists state independently for each presentation', () => {
		// Initialize and navigate in 'life' presentation
		navigation.init('life', [9, 15, 12]);
		navigation.next();
		navigation.next();
		navigation.next();
		
		// Verify life state was persisted under its own key
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'mbs-nav-life',
			expect.stringContaining('"fragment":3')
		);
		
		// Switch to a different presentation (no reset needed - separate keys)
		vi.clearAllMocks();
		navigation.reset();
		
		// Initialize and navigate in 'promises' presentation
		navigation.init('promises', [5, 5, 5]);
		navigation.next();
		
		// Verify promises state was persisted under its own key
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'mbs-nav-promises',
			expect.stringContaining('"fragment":1')
		);
		
		// Verify life state is still preserved (not overwritten)
		const lifeStored = localStorage.getItem('mbs-nav-life');
		expect(lifeStored).not.toBeNull();
		const lifeState = JSON.parse(lifeStored!);
		expect(lifeState.current.fragment).toBe(3);
		expect(lifeState.current.presentation).toBe('life');
	});
});

describe('Navigation Store - Init with Drill Return', () => {
	it('preserves position when isReturningFromDrill is true', () => {
		navigation.init('life', [9, 15, 12]);
		
		// Navigate and drill
		for (let i = 0; i < 7; i++) navigation.next();
		navigation.drillInto('life/test');
		
		// Return sets flag and advances fragment by 1
		navigation.returnFromDrill();
		
		let state = get(navigation);
		expect(state.isReturningFromDrill).toBe(true);
		// With pending drill approach, we return to exact position (7, not 8)
		expect(state.current.fragment).toBe(7);
		
		// Re-init (as page component would do)
		navigation.init('life', [9, 15, 12]);
		
		// Should preserve position (still at 7)
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
		navigation.registerDrillTarget(0, 5, 'life/1thessalonians.5.23');
		
		const state = get(navigation);
		expect(state.drillTargets['0:5']).toEqual({ target: 'life/1thessalonians.5.23', returnHere: false, autoDrill: false });
	});

	it('unregisters drill target when unregisterDrillTarget is called', () => {
		navigation.registerDrillTarget(0, 5, 'life/1thessalonians.5.23');
		navigation.unregisterDrillTarget(0, 5);
		
		const state = get(navigation);
		expect(state.drillTargets['0:5']).toBeUndefined();
	});

	it('auto-drills when next() is called at maxFragment with registered drillTarget', () => {
		// Simulate being in a drill (ecclesiastes) with fragment 5 having a drillTo
		navigation.drillInto('life/ecclesiastes.3.19');
		navigation.setMaxFragment(5);
		navigation.registerDrillTarget(0, 5, 'life/1thessalonians.5.23');
		
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
		navigation.registerDrillTarget(0, 5, 'life/1thessalonians.5.23');
		navigation.drillInto('life/test');
		
		const state = get(navigation);
		expect(state.drillTargets).toEqual({});
	});

	it('clears drillTargets when advancing to next slide', () => {
		navigation.init('life', [3, 5]);
		navigation.registerDrillTarget(0, 3, 'life/test');
		
		// Advance through all fragments of slide 0
		for (let i = 0; i < 3; i++) navigation.next();
		
		// Advance to next slide (since no drillTarget at step 3 for slide)
		// Wait - step 3 IS registered, so it should auto-drill
		// Let's adjust the test: register at a step that's NOT the max
		navigation.init('life', [5, 5]);
		navigation.registerDrillTarget(0, 3, 'life/test'); // Not at max (5)
		
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
		navigation.registerDrillTarget(0, 5, 'life/1thessalonians.5.23');
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
		// With pending drill approach, we return to exact position (8, not 9)
		expect(state.current.fragment).toBe(8);
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
		
		// Save expected return position (exact position with pending drill approach)
		const expectedSlide = get(navigation).current.slide;
		const expectedFragment = get(navigation).current.fragment; // Exact position now
		
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

describe('Navigation Store - Return to Parent Functionality', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		localStorage.clear();
		navigation.init('life', [9, 15, 12]);
	});

	it('stores returnHere flag when registering drill target', () => {
		navigation.registerDrillTarget(0, 5, 'life/nested', true);
		
		const state = get(navigation);
		expect(state.drillTargets['0:5']).toEqual({ target: 'life/nested', returnHere: true, autoDrill: false });
	});

	it('returns here instead of origin when returnHere is true', () => {
		// First drill into a parent route
		navigation.drillInto('life/parent-drill');
		navigation.setMaxFragment(3);
		
		// From parent, drill into nested with returnHere=true
		// This means: when nested ends, return here (not origin)
		navigation.drillInto('life/nested-drill', 0, true);
		navigation.setMaxFragment(2);
		
		// Advance through nested drill
		navigation.next();
		navigation.next();
		
		// next() at end of nested should return to parent (not origin)
		navigation.next();
		
		const state = get(navigation);
		expect(state.current.presentation).toBe('life/parent-drill');
		expect(state.stack.length).toBe(1); // Origin still on stack
	});

	it('returns all the way to origin when returnHere is false (default)', () => {
		// First drill into a parent route
		navigation.drillInto('life/parent-drill');
		navigation.setMaxFragment(3);
		
		// From parent, drill into nested with returnHere=false (default)
		navigation.registerDrillTarget(0, 3, 'life/nested-drill', false);
		navigation.next();
		navigation.next();
		navigation.next(); // This triggers auto-drill
		
		// Now in nested-drill
		navigation.setMaxFragment(2);
		navigation.next();
		navigation.next();
		
		// next() should return to origin
		navigation.next();
		
		const state = get(navigation);
		expect(state.current.presentation).toBe('life');
		expect(state.stack.length).toBe(0);
	});
});

describe('Navigation Store - Auto-Drill All Mode', () => {
	/**
	 * Tests for autoDrillAll mode:
	 * When enabled (default), ALL fragments with drillTo auto-drill on next click.
	 * When disabled, only the last fragment with drillTo auto-drills.
	 * This affects fragment 0 and mid-slide fragments, not just the last one.
	 */
	
	beforeEach(() => {
		vi.clearAllMocks();
		localStorage.clear();
		navigation.reset();
		// Ensure autoDrillAll is enabled for tests (default state)
		navigation.setAutoDrillAll(true);
		navigation.init('life', [9, 15, 12]);
	});

	it('defaults to autoDrillAll enabled', () => {
		const state = get(navigation);
		expect(state.autoDrillAll).toBe(true);
	});

	it('can set autoDrillAll to false', () => {
		navigation.setAutoDrillAll(false);
		
		const state = get(navigation);
		expect(state.autoDrillAll).toBe(false);
	});

	it('persists autoDrillAll to localStorage', () => {
		// Clear previous calls
		(localStorage.setItem as ReturnType<typeof vi.fn>).mockClear();
		
		navigation.setAutoDrillAll(false);
		
		expect(localStorage.setItem).toHaveBeenCalledWith('mbs-drillto', 'false');
	});

	it('autoDrillAll can be toggled and getter returns correct value', () => {
		// Start with autoDrillAll enabled (set in beforeEach)
		expect(navigation.getAutoDrillAll()).toBe(true);
		
		// Toggle off
		navigation.setAutoDrillAll(false);
		expect(navigation.getAutoDrillAll()).toBe(false);
		
		// Verify persistence was called
		expect(localStorage.setItem).toHaveBeenCalledWith('mbs-drillto', 'false');
		
		// Toggle back on
		navigation.setAutoDrillAll(true);
		expect(navigation.getAutoDrillAll()).toBe(true);
		
		// Verify persistence was called
		expect(localStorage.setItem).toHaveBeenCalledWith('mbs-drillto', 'true');
	});

	it('auto-drills at fragment 0 when autoDrillAll is enabled', () => {
		// Register a drillTo at fragment 0 (static but with step=0)
		navigation.registerDrillTarget(0, 0, 'life/genesis.1.1');
		
		// Verify autoDrillAll is enabled
		expect(get(navigation).autoDrillAll).toBe(true);
		
		// Fragment 0 is already shown. With pending drill approach:
		// - There's no pending drill set yet (we're already at fragment 0)
		// - For fragment 0 drillTo, the drill happens when at maxFragment on a single-fragment slide
		// Let's simulate a slide with maxFragment = 0
		navigation.setMaxFragment(0);
		
		// Now next() at maxFragment (0) should auto-drill
		navigation.next();
		
		expect(goto).toHaveBeenCalledWith('/life/genesis.1.1');
		expect(get(navigation).current.presentation).toBe('life/genesis.1.1');
	});

	it('auto-drills at mid-slide step when autoDrillAll is enabled', () => {
		// Register a drillTo at fragment 5 (mid-slide)
		navigation.registerDrillTarget(0, 5, 'life/ecclesiastes.3.19');
		
		// Verify autoDrillAll is enabled
		expect(get(navigation).autoDrillAll).toBe(true);
		
		// Advance to fragment 5
		for (let i = 0; i < 5; i++) navigation.next();
		expect(get(navigation).current.fragment).toBe(5);
		
		// Next click should auto-drill (fragment 5 is shown, has drillTo)
		navigation.next();
		
		expect(goto).toHaveBeenCalledWith('/life/ecclesiastes.3.19');
		expect(get(navigation).current.presentation).toBe('life/ecclesiastes.3.19');
	});

	it('does NOT auto-drill at mid-slide step when autoDrillAll is disabled', () => {
		navigation.setAutoDrillAll(false);
		
		// Register a drillTo at fragment 5 (mid-slide)
		navigation.registerDrillTarget(0, 5, 'life/ecclesiastes.3.19');
		
		// Advance to fragment 5
		for (let i = 0; i < 5; i++) navigation.next();
		expect(get(navigation).current.fragment).toBe(5);
		
		// Reset goto mock to check new calls
		goto.mockClear();
		
		// Next click should advance to fragment 6 (NOT auto-drill)
		navigation.next();
		
		expect(goto).not.toHaveBeenCalled();
		expect(get(navigation).current.fragment).toBe(6);
	});

	it('arrow skips drill at last fragment when autoDrillAll is disabled', () => {
		navigation.setAutoDrillAll(false);
		
		// Set up a drill with drillTo on the last fragment
		navigation.drillInto('life/test-drill');
		navigation.setMaxFragment(3);
		navigation.registerDrillTarget(0, 3, 'life/next-drill');
		
		// Advance to last fragment
		for (let i = 0; i < 3; i++) navigation.next();
		expect(get(navigation).current.fragment).toBe(3);
		
		// Next should return from drill, not auto-drill (autoDrillAll=false)
		navigation.next();
		
		// Should return to origin, not drill into next-drill
		expect(goto).toHaveBeenCalledWith('/life');
	});

	it('respects returnHere flag when auto-drilling with autoDrillAll', () => {
		// Verify autoDrillAll is enabled
		expect(get(navigation).autoDrillAll).toBe(true);
		
		// Set up parent drill
		navigation.drillInto('life/parent-drill');
		navigation.setMaxFragment(5);
		
		// Register mid-slide drillTo with returnHere=true
		navigation.registerDrillTarget(0, 2, 'life/nested-drill', true);
		
		// Advance to fragment 2
		navigation.next();
		navigation.next();
		expect(get(navigation).current.fragment).toBe(2);
		
		// Auto-drill into nested (with returnHere=true)
		navigation.next();
		
		expect(get(navigation).current.presentation).toBe('life/nested-drill');
		expect(get(navigation).returnHere).toBe(true);
		
		// When nested ends, should return to parent (not origin)
		navigation.setMaxFragment(1);
		navigation.next();
		navigation.next(); // Triggers return
		
		expect(get(navigation).current.presentation).toBe('life/parent-drill');
		expect(get(navigation).stack.length).toBe(1); // Origin still on stack
	});

	it('returns to origin when toggling off autoDrillAll while in a drill', () => {
		// Navigate into a drill
		navigation.drillInto('life/test-drill');
		navigation.setMaxFragment(5);
		navigation.next();
		navigation.next();
		
		expect(get(navigation).stack.length).toBe(1);
		
		// Toggle off autoDrillAll
		navigation.setAutoDrillAll(false);
		
		// Should have returned to origin
		expect(get(navigation).current.presentation).toBe('life');
		expect(get(navigation).stack.length).toBe(0);
	});

	it('does not return when toggling off autoDrillAll when not in a drill', () => {
		// Just in main presentation, no drill
		navigation.next();
		navigation.next();
		
		const fragmentBefore = get(navigation).current.fragment;
		
		// Toggle off autoDrillAll - should not affect position
		navigation.setAutoDrillAll(false);
		
		expect(get(navigation).current.presentation).toBe('life');
		expect(get(navigation).current.fragment).toBe(fragmentBefore);
	});

	it('uses pending drill approach - fragment shows first, then drill on next click', () => {
		// Register a drillTo at fragment 3
		navigation.registerDrillTarget(0, 3, 'life/test-drill');
		
		// Navigate to fragment 3
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3 - fragment 3 is now visible, pendingAutoDrill is set
		expect(get(navigation).current.fragment).toBe(3);
		
		// Check that pendingAutoDrill is set
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/test-drill', returnHere: false, autoDrill: false });
		
		// Next click should execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/test-drill');
		
		// Set up drill state and return
		navigation.setMaxFragment(2);
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // End of drill - should return
		
		// After return, should be back at life at exact position (3)
		// With pending drill approach, we return to exact position
		expect(get(navigation).current.presentation).toBe('life');
		expect(get(navigation).current.fragment).toBe(3);  // Exact position restored
		expect(get(navigation).pendingAutoDrill).toBeNull();  // Pending drill cleared on return
		
		// Re-init as page component would do (registers drillTargets again)
		navigation.init('life', [9, 15, 12]);
		navigation.registerDrillTarget(0, 3, 'life/test-drill');
		
		// Since we're at fragment 3 and pendingAutoDrill is null (cleared on return),
		// next() will advance to fragment 4 (and set pending if 4 has a drillTo)
		navigation.next();
		
		expect(get(navigation).current.presentation).toBe('life'); // Still in life
		expect(get(navigation).current.fragment).toBe(4); // Advanced to next fragment
		
		// Register at fragment 5 and navigate there
		navigation.registerDrillTarget(0, 5, 'life/another-drill');
		navigation.next(); // 5 - sets pending for fragment 5
		expect(get(navigation).current.fragment).toBe(5);
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/another-drill', returnHere: false, autoDrill: false });
		
		// Next should execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/another-drill');
	});
});

describe('Navigation Store - Per-Fragment autoDrill', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		localStorage.clear();
		// Disable global autoDrillAll to test per-fragment behavior
		navigation.setAutoDrillAll(false);
		navigation.init('life', [9, 15, 12]);
	});

	it('registers autoDrill flag when registerDrillTarget is called with autoDrill=true', () => {
		navigation.registerDrillTarget(0, 5, 'life/test', false, true);
		
		const state = get(navigation);
		expect(state.drillTargets['0:5']).toEqual({ target: 'life/test', returnHere: false, autoDrill: true });
	});

	it('auto-drills at mid-slide step when per-fragment autoDrill is true (and autoDrillAll is false)', () => {
		// Register a drillTo with autoDrill=true
		navigation.registerDrillTarget(0, 5, 'life/per-fragment-drill', false, true);
		
		// Navigate to fragment 5
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3
		navigation.next(); // 4
		navigation.next(); // 5 - sets pending auto-drill because per-fragment autoDrill is true
		expect(get(navigation).current.fragment).toBe(5);
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/per-fragment-drill', returnHere: false, autoDrill: true });
		
		// Next click should execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/per-fragment-drill');
	});

	it('does NOT auto-drill when per-fragment autoDrill is false (and autoDrillAll is false)', () => {
		// Register a drillTo with autoDrill=false (default)
		navigation.registerDrillTarget(0, 5, 'life/no-auto-drill', false, false);
		
		// Navigate to fragment 5
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3
		navigation.next(); // 4
		navigation.next(); // 5 - should NOT set pending auto-drill
		expect(get(navigation).current.fragment).toBe(5);
		expect(get(navigation).pendingAutoDrill).toBeNull();
	});

	it('auto-drills at end of slide when per-fragment autoDrill is true at maxFragment', () => {
		// Re-init with 5 fragments so we can test at maxFragment
		navigation.init('life', [5]);
		
		// Register at maxFragment (5) with autoDrill=true
		navigation.registerDrillTarget(0, 5, 'life/end-drill', false, true);
		
		// Navigate to fragment 5 (maxFragment)
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3
		navigation.next(); // 4
		navigation.next(); // 5 - sets pending for autoDrill
		expect(get(navigation).current.fragment).toBe(5);
		
		// Next should execute the auto-drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/end-drill');
	});

	it('global autoDrillAll overrides per-fragment autoDrill=false', () => {
		// Enable global autoDrillAll
		navigation.setAutoDrillAll(true);
		
		// Register a drillTo with autoDrill=false
		navigation.registerDrillTarget(0, 5, 'life/override-drill', false, false);
		
		// Navigate to fragment 5
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3
		navigation.next(); // 4
		navigation.next(); // 5 - should still set pending because autoDrillAll is enabled
		expect(get(navigation).current.fragment).toBe(5);
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/override-drill', returnHere: false, autoDrill: false });
	});

	it('checkAutoDrillAtCurrentPosition sets pending for static content (step 0) with autoDrill', () => {
		// Start at fragment 0 (default init state)
		expect(get(navigation).current.fragment).toBe(0);
		
		// Register a drillTo at step 0 with autoDrill=true (like static content)
		navigation.registerDrillTarget(0, 0, 'life/static-drill', false, true);
		
		// Call checkAutoDrillAtCurrentPosition (this is what Fragment does after registration)
		navigation.checkAutoDrillAtCurrentPosition(0, 0);
		
		// Pending should be set immediately since we're at position 0:0
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/static-drill', returnHere: false, autoDrill: true });
		
		// Next click should execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/static-drill');
	});

	it('checkAutoDrillAtCurrentPosition does NOT set pending when not at matching position', () => {
		// Navigate to fragment 3 first
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // 3
		expect(get(navigation).current.fragment).toBe(3);
		
		// Register a drillTo at step 0 with autoDrill=true
		navigation.registerDrillTarget(0, 0, 'life/static-drill', false, true);
		
		// Call checkAutoDrillAtCurrentPosition for step 0 - should not set pending since we're at step 3
		navigation.checkAutoDrillAtCurrentPosition(0, 0);
		
		// Pending should NOT be set because we're at fragment 3, not 0
		expect(get(navigation).pendingAutoDrill).toBeNull();
	});

	it('checkAutoDrillAtCurrentPosition sets pending when autoDrillAll is enabled (even if per-fragment autoDrill is false)', () => {
		// Enable global autoDrillAll
		navigation.setAutoDrillAll(true);
		
		// Start at fragment 0
		expect(get(navigation).current.fragment).toBe(0);
		
		// Register a drillTo at step 0 with autoDrill=false
		navigation.registerDrillTarget(0, 0, 'life/global-auto-drill', false, false);
		
		// Call checkAutoDrillAtCurrentPosition
		navigation.checkAutoDrillAtCurrentPosition(0, 0);
		
		// Pending should be set because autoDrillAll is enabled
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/global-auto-drill', returnHere: false, autoDrill: false });
	});

	it('checkAutoDrillAtCurrentPosition does NOT set pending when both autoDrillAll and autoDrill are false', () => {
		// autoDrillAll is already false from beforeEach
		expect(get(navigation).current.fragment).toBe(0);
		
		// Register a drillTo at step 0 with autoDrill=false
		navigation.registerDrillTarget(0, 0, 'life/no-auto', false, false);
		
		// Call checkAutoDrillAtCurrentPosition
		navigation.checkAutoDrillAtCurrentPosition(0, 0);
		
		// Pending should NOT be set
		expect(get(navigation).pendingAutoDrill).toBeNull();
	});

	it('does NOT re-trigger drill after returning from it (lastCompletedDrill check)', () => {
		// This test simulates the EXACT flow that caused the infinite loop bug:
		// 1. Advance to slide with autoDrill at fragment 0
		// 2. Execute the drill
		// 3. Return from drill
		// 4. init() is called (as page component would)
		// 5. Fragment re-registers and calls checkAutoDrillAtCurrentPosition
		// 6. Should NOT re-trigger the same drill
		
		// Set up: slide 0 has 3 fragments, slide 1 has 5 fragments
		navigation.init('life', [3, 5]);
		
		// Register autoDrill at slide 1, fragment 0 (static content)
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		
		// Navigate through slide 0 to reach slide 1
		for (let i = 0; i < 3; i++) navigation.next();
		navigation.next(); // Advance to slide 1 - sets pending auto-drill
		
		expect(get(navigation).current.slide).toBe(1);
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/slide2-drill', returnHere: false, autoDrill: true });
		
		// Execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/slide2-drill');
		
		// Set up drill state and return
		navigation.setMaxFragment(2);
		navigation.next(); // 1
		navigation.next(); // 2
		navigation.next(); // End - triggers return to origin
		
		// After return, we're back at life on slide 1, fragment 0
		expect(get(navigation).current.presentation).toBe('life');
		expect(get(navigation).current.slide).toBe(1);
		expect(get(navigation).current.fragment).toBe(0);
		
		// Simulate what page component does: init() and Fragment re-registration
		navigation.init('life', [3, 5]);
		
		// Fragment re-registers the drill target
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		
		// Fragment calls checkAutoDrillAtCurrentPosition after registration
		navigation.checkAutoDrillAtCurrentPosition(1, 0);
		
		// CRITICAL: pendingAutoDrill should NOT be set because we just returned from this drill
		expect(get(navigation).pendingAutoDrill).toBeNull();
		
		// Verify lastCompletedDrill is set
		expect(get(navigation).lastCompletedDrill).toBe('life/slide2-drill');
	});

	it('allows re-triggering drill after navigating away and back', () => {
		// After returning from a drill, if user navigates away and comes back,
		// the drill should be triggerable again
		
		navigation.init('life', [3, 5]);
		
		// Register autoDrill at slide 1, fragment 0
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		
		// Navigate to slide 1 and trigger the drill
		for (let i = 0; i < 3; i++) navigation.next();
		navigation.next(); // Advance to slide 1
		navigation.next(); // Execute pending drill
		
		expect(get(navigation).current.presentation).toBe('life/slide2-drill');
		
		// Return from drill
		navigation.setMaxFragment(1);
		navigation.next();
		navigation.next();
		
		// Back at life, slide 1
		expect(get(navigation).current.presentation).toBe('life');
		expect(get(navigation).lastCompletedDrill).toBe('life/slide2-drill');
		
		// Simulate re-init
		navigation.init('life', [3, 5]);
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		navigation.checkAutoDrillAtCurrentPosition(1, 0);
		
		// Drill should NOT trigger (we just returned)
		expect(get(navigation).pendingAutoDrill).toBeNull();
		
		// User navigates to next fragment
		navigation.next();
		expect(get(navigation).current.fragment).toBe(1);
		
		// lastCompletedDrill should be cleared
		expect(get(navigation).lastCompletedDrill).toBeNull();
		
		// User goes back to fragment 0 (via prev)
		navigation.prev();
		expect(get(navigation).current.fragment).toBe(0);
		
		// Re-register and check - NOW it should set pending
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		navigation.checkAutoDrillAtCurrentPosition(1, 0);
		
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/slide2-drill', returnHere: false, autoDrill: true });
	});

	it('clears lastCompletedDrill when advancing to next fragment', () => {
		navigation.init('life', [5]);
		
		// Manually set lastCompletedDrill (simulating return from drill)
		// We need to use the store's internals for this test
		navigation.registerDrillTarget(0, 0, 'life/test-drill', false, true);
		navigation.checkAutoDrillAtCurrentPosition(0, 0);
		navigation.next(); // Execute pending
		
		expect(get(navigation).current.presentation).toBe('life/test-drill');
		
		// Return
		navigation.setMaxFragment(1);
		navigation.next();
		navigation.next();
		
		expect(get(navigation).lastCompletedDrill).toBe('life/test-drill');
		
		// Re-init and advance
		navigation.init('life', [5]);
		navigation.next();
		
		// lastCompletedDrill should be cleared
		expect(get(navigation).lastCompletedDrill).toBeNull();
	});

	it('clears lastCompletedDrill when advancing to next slide', () => {
		navigation.init('life', [3, 5]);
		
		// Navigate to slide 1, trigger drill, return
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		for (let i = 0; i < 3; i++) navigation.next();
		navigation.next(); // To slide 1
		navigation.next(); // Execute drill
		
		navigation.setMaxFragment(1);
		navigation.next();
		navigation.next(); // Return
		
		expect(get(navigation).lastCompletedDrill).toBe('life/slide2-drill');
		
		// Re-init and go through slide 1 to slide 2 (if we had one)
		navigation.init('life', [3, 5, 3]);
		
		// Advance through slide 1's fragments
		for (let i = 0; i < 5; i++) navigation.next();
		
		// Advance to slide 2
		navigation.next();
		
		// lastCompletedDrill should be cleared
		expect(get(navigation).lastCompletedDrill).toBeNull();
	});

	it('sets pending auto-drill when advancing to a new slide with autoDrill at fragment 0', () => {
		// Start at slide 0
		expect(get(navigation).current.slide).toBe(0);
		
		// Register a drillTo at slide 1, step 0 with autoDrill=true (like static content on Slide2)
		navigation.registerDrillTarget(1, 0, 'life/slide2-drill', false, true);
		
		// Navigate through slide 0 to reach its end (maxFragment is 9 for slide 0)
		for (let i = 0; i < 9; i++) {
			navigation.next();
		}
		expect(get(navigation).current.slide).toBe(0);
		expect(get(navigation).current.fragment).toBe(9);
		
		// Next click should advance to slide 1 and set pending auto-drill
		navigation.next();
		expect(get(navigation).current.slide).toBe(1);
		expect(get(navigation).current.fragment).toBe(0);
		expect(get(navigation).pendingAutoDrill).toEqual({ target: 'life/slide2-drill', returnHere: false, autoDrill: true });
		
		// Next click should execute the pending drill
		navigation.next();
		expect(get(navigation).current.presentation).toBe('life/slide2-drill');
	});
});
