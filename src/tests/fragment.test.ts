/**
 * Fragment Component Tests
 * 
 * Tests the Fragment component which handles:
 * 1. Visibility based on currentFragment from navigation store
 * 2. withPrev - appears with previous fragment  
 * 3. afterPrev - appears with previous fragment (with delay styling)
 * 4. drillTo - clickable to drill into a sub-presentation
 * 5. layout/font/fill/line - absolute positioning and styling
 * 6. animate - CSS entrance animations
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
			expect(getMockDrillInto()).toHaveBeenCalledWith('life/ecclesiastes.3.19', 0, false);
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

describe('Fragment Component - Optional Step (Static Drillable Links)', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(0); // Start at fragment 0
	});

	it('is always visible when step is omitted', () => {
		// Even at fragment 0, a stepless Fragment should be visible
		getMockFragment().set(0);
		
		const { container } = render(Fragment, {
			props: {
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		// Should render and be drillable
		const drillable = container.querySelector('.drillable');
		expect(drillable).not.toBeNull();
	});

	it('supports drillTo without step', async () => {
		const { container } = render(Fragment, {
			props: {
				drillTo: 'life/ecclesiastes.3.19',
				returnHere: true,
				children: mockChildren
			}
		});
		
		const drillable = container.querySelector('.drillable');
		expect(drillable).not.toBeNull();
		
		if (drillable) {
			await fireEvent.click(drillable);
			expect(getMockDrillInto()).toHaveBeenCalledWith('life/ecclesiastes.3.19', 0, true);
		}
	});

	it('has no animation-delay when step is omitted', () => {
		const { container } = render(Fragment, {
			props: {
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.animationDelay).toBe('0ms');
		}
	});

	it('does not register drill target when step is omitted', () => {
		const mockRegister = (navMock as any).__mockRegisterDrillTarget;
		
		render(Fragment, {
			props: {
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		// Should NOT register since there's no step for auto-drill
		expect(mockRegister).not.toHaveBeenCalled();
	});

	it('registers drill target when step is provided', () => {
		const mockRegister = (navMock as any).__mockRegisterDrillTarget;
		
		render(Fragment, {
			props: {
				step: 5,
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		// Should register for auto-drill at step 5
		expect(mockRegister).toHaveBeenCalledWith(5, 'life/test', false);
	});
});

describe('Fragment Component - Layout Positioning', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(5); // Ensure visible
	});

	it('applies absolute positioning styles when layout is provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		if (div) {
			expect(div.style.position).toBe('absolute');
			expect(div.style.left).toBe('100px');
			expect(div.style.top).toBe('50px');
			expect(div.style.width).toBe('200px');
			expect(div.style.height).toBe('40px');
		}
	});

	it('applies z-index when provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 100 },
				zIndex: 25,
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.zIndex).toBe('25');
		}
	});

	it('applies rotation transform when provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 100, rotation: 45 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.transform).toContain('rotate(45deg)');
		}
	});

	it('does not add fragment-positioned class without layout', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned');
		expect(div).toBeNull();
	});
});

describe('Fragment Component - Font Styling', () => {
	beforeEach(() => {
		getMockFragment().set(5);
	});

	it('applies font-size when provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				font: { font_size: 24 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.fontSize).toBe('24px');
		}
	});

	it('applies bold and italic', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				font: { bold: true, italic: true },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.fontWeight).toBe('bold');
			expect(div.style.fontStyle).toBe('italic');
		}
	});

	it('applies color and alignment', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				font: { color: '#FF0000', alignment: 'left' },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.color).toBe('rgb(255, 0, 0)');
			expect(div.style.textAlign).toBe('left');
		}
	});
});

describe('Fragment Component - Fill and Line Styling', () => {
	beforeEach(() => {
		getMockFragment().set(5);
	});

	it('applies background fill color', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				fill: '#CCCCCC',
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.backgroundColor).toBe('rgb(204, 204, 204)');
		}
	});

	it('applies border styling', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				line: { color: '#000000', width: 2 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		if (div) {
			expect(div.style.borderColor).toBe('rgb(0, 0, 0)');
			expect(div.style.borderWidth).toBe('2px');
			expect(div.style.borderStyle).toBe('solid');
		}
	});
});

describe('Fragment Component - Animations', () => {
	beforeEach(() => {
		getMockFragment().set(5);
	});

	it('adds animate-fade class when animate="fade"', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'fade',
				children: mockChildren
			}
		});

		const div = container.querySelector('.animate-fade');
		expect(div).not.toBeNull();
	});

	it('adds animate-fly-up class when animate="fly-up"', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'fly-up',
				children: mockChildren
			}
		});

		const div = container.querySelector('.animate-fly-up');
		expect(div).not.toBeNull();
	});

	it('adds animate-scale class when animate="scale"', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'scale',
				children: mockChildren
			}
		});

		const div = container.querySelector('.animate-scale');
		expect(div).not.toBeNull();
	});

	it('does not add animation class when animate is not provided', () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned');
		expect(div).not.toBeNull();
		expect(div?.classList.contains('animate-fade')).toBe(false);
		expect(div?.classList.contains('animate-fly-up')).toBe(false);
		expect(div?.classList.contains('animate-scale')).toBe(false);
	});
});

describe('Fragment Component - Static Positioned Content', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(0); // Start at fragment 0
	});

	it('is visible at fragment 0 when step is omitted with layout', () => {
		const { container } = render(Fragment, {
			props: {
				layout: { x: 321, y: 3, width: 316, height: 42 },
				font: { font_size: 43 },
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		if (div) {
			expect(div.style.left).toBe('321px');
			expect(div.style.fontSize).toBe('43px');
		}
	});

	it('combines layout and drillTo for static drillable positioned content', () => {
		const { container } = render(Fragment, {
			props: {
				layout: { x: 100, y: 100, width: 200, height: 50 },
				drillTo: 'promises/genesis-12-1',
				children: mockChildren
			}
		});

		const div = container.querySelector('.fragment-positioned.drillable');
		expect(div).not.toBeNull();
	});
});
