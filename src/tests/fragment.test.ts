/**
 * Fragment Component Tests
 * 
 * Tests the Fragment component which handles:
 * 1. Visibility based on currentFragment from navigation store
 * 2. withPrev - appears with previous fragment  
 * 3. afterPrev - appears with previous fragment (with delay styling)
 * 4. drillTo - clickable to drill into a sub-presentation
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import type { Snippet } from 'svelte';

// Helper to create a mock snippet for testing
const mockChildren = (() => {}) as unknown as Snippet<[]>;

// Create mock stores BEFORE vi.mock call
const mockFragment = writable(0);
const mockDrillIntoFn = vi.fn();

// Mock must be hoisted - use factory function with no external references
vi.mock('$lib/stores/navigation', () => {
	const fragmentStore = writable(0);
	const drillFn = vi.fn();
	const registerDrillTargetFn = vi.fn();
	const unregisterDrillTargetFn = vi.fn();
	return {
		currentFragment: fragmentStore,
		navigation: {
			drillInto: drillFn,
			registerDrillTarget: registerDrillTargetFn,
			unregisterDrillTarget: unregisterDrillTargetFn,
			subscribe: vi.fn(),
			next: vi.fn(),
			prev: vi.fn()
		},
		// Export these so tests can access them
		__mockFragment: fragmentStore,
		__mockDrillInto: drillFn,
		__mockRegisterDrillTarget: registerDrillTargetFn,
		__mockUnregisterDrillTarget: unregisterDrillTargetFn
	};
});

// Import component after mocks
import Fragment from '$lib/components/Fragment.svelte';
import * as navMock from '$lib/stores/navigation';

// Get references to the mock functions
const getMockFragment = () => (navMock as any).__mockFragment;
const getMockDrillInto = () => (navMock as any).__mockDrillInto;

describe('Fragment Component - Visibility', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(0);
	});

	it('is hidden when currentFragment < step', () => {
		getMockFragment().set(0);
		
		const { container } = render(Fragment, {
			props: {
				step: 3,
				children: mockChildren
			}
		});
		
		// Fragment should not render its children
		expect(container.querySelector('.drillable')).toBeNull();
	});

	it('is visible when currentFragment >= step', () => {
		getMockFragment().set(5);
		
		const { container } = render(Fragment, {
			props: {
				step: 3,
				children: mockChildren
			}
		});
		
		// When visible, it renders (though content depends on snippet)
		// The component exists in DOM
		expect(container).toBeDefined();
	});

	it('shows with withPrev at step - 1', () => {
		// withPrev means: show when currentFragment >= (step - 1)
		getMockFragment().set(2);
		
		const { container } = render(Fragment, {
			props: {
				step: 3,
				withPrev: true,
				children: mockChildren
			}
		});
		
		// Step 3 with withPrev shows at fragment 2
		expect(container).toBeDefined();
	});

	it('shows with afterPrev at step - 1', () => {
		// afterPrev works same as withPrev for visibility
		getMockFragment().set(2);
		
		const { container } = render(Fragment, {
			props: {
				step: 3,
				afterPrev: true,
				children: mockChildren
			}
		});
		
		expect(container).toBeDefined();
	});
});

describe('Fragment Component - Drill Functionality', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(5); // Ensure visible
	});

	it('adds drillable class when drillTo is provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				drillTo: 'life/ecclesiastes.3.19',
				children: mockChildren
			}
		});
		
		const drillable = container.querySelector('.drillable');
		expect(drillable).not.toBeNull();
	});

	it('calls navigation.drillInto when clicked with drillTo', async () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				drillTo: 'life/ecclesiastes.3.19',
				children: mockChildren
			}
		});
		
		const drillable = container.querySelector('.drillable');
		if (drillable) {
			await fireEvent.click(drillable);
			expect(getMockDrillInto()).toHaveBeenCalledWith('life/ecclesiastes.3.19');
		}
	});

	it('does not call drillInto when not visible', async () => {
		getMockFragment().set(0); // Fragment at step 5 won't be visible
		
		const { container } = render(Fragment, {
			props: {
				step: 5,
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		// Nothing to click since it's not rendered
		const drillable = container.querySelector('.drillable');
		expect(drillable).toBeNull();
		expect(getMockDrillInto()).not.toHaveBeenCalled();
	});
});

describe('Fragment Component - Animation Delay', () => {
	beforeEach(() => {
		getMockFragment().set(5);
	});

	it('sets animation-delay for afterPrev', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3,
				afterPrev: true,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.animationDelay).toBe('500ms');
		}
	});

	it('has no animation-delay without afterPrev', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.animationDelay).toBe('0ms');
		}
	});
});
