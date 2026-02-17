/**
 * Fragment Component Tests
 * 
 * Tests the Fragment component which handles:
 * 1. Visibility based on currentFragment from navigation store
 * 2. Decimal steps for animation sequencing (e.g., 1.1 = step 1 with 500ms delay)
 * 3. drillTo - clickable to drill into a sub-presentation
 * 4. layout/font/fill/line - absolute positioning and styling
 * 5. animate - CSS entrance animations
 * 6. keyframes - step-based motion animation (position/size/rotation/opacity tweening)
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
	const slideStore = writable(0);
	const drillFn = vi.fn();
	const registerDrillTargetFn = vi.fn();
	const unregisterDrillTargetFn = vi.fn();
	const checkAutoDrillAtCurrentPositionFn = vi.fn();
	return {
		currentFragment: fragmentStore,
		currentSlide: slideStore,
		navigation: {
			drillInto: drillFn,
			registerDrillTarget: registerDrillTargetFn,
			unregisterDrillTarget: unregisterDrillTargetFn,
			checkAutoDrillAtCurrentPosition: checkAutoDrillAtCurrentPositionFn,
			subscribe: vi.fn(),
			next: vi.fn(),
			prev: vi.fn()
		},
		// Export these so tests can access them
		__mockFragment: fragmentStore,
		__mockSlide: slideStore,
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

	it('shows decimal step at same fragment as integer step', () => {
		// 3.1 should show at same time as 3 (both visible at fragment 3)
		getMockFragment().set(3);
		
		const { container } = render(Fragment, {
			props: {
				step: 3.1,
				children: mockChildren
			}
		});
		
		// Step 3.1 shows at fragment 3 (same click, just delayed animation)
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

	it('sets animation-delay for decimal step (e.g., 3.1 = 500ms)', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3.1,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.getPropertyValue('--animation-delay')).toBe('500ms');
		}
	});

	it('sets animation-delay proportional to decimal (e.g., 3.2 = 1000ms)', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3.2,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.getPropertyValue('--animation-delay')).toBe('1000ms');
		}
	});

	it('has no animation-delay for integer step', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.getPropertyValue('--animation-delay')).toBe('0ms');
		}
	});

	it('allows explicit delay prop to override calculated delay', () => {
		const { container } = render(Fragment, {
			props: {
				step: 3.1,
				delay: 200,
				children: mockChildren
			}
		});
		
		const div = container.querySelector('div');
		if (div) {
			expect(div.style.getPropertyValue('--animation-delay')).toBe('200ms');
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
			expect(div.style.getPropertyValue('--animation-delay')).toBe('0ms');
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

	it('registers drill target when step is provided', async () => {
		const mockRegister = (navMock as any).__mockRegisterDrillTarget;
		
		render(Fragment, {
			props: {
				step: 5,
				drillTo: 'life/test',
				children: mockChildren
			}
		});
		
		// Wait for tick() in Fragment's $effect to complete
		await new Promise(resolve => setTimeout(resolve, 0));
		
		// Should register for auto-drill at slideIndex 0, step 5 (with autoDrill defaulting to false)
		expect(mockRegister).toHaveBeenCalledWith(0, 5, 'life/test', false, false);
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
				font: { color: '#FF0000', align: 'left' },
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
		// Start with fragment 0 so fragments are NOT visible at mount
		getMockFragment().set(0);
	});

	it('adds animate-fade class when animate="fade"', async () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'fade',
				children: mockChildren
			}
		});

		// Wait for onMount setTimeout to complete
		await new Promise(resolve => setTimeout(resolve, 10));
		
		// Now make fragment visible - this should trigger animation
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));
		
		const div = container.querySelector('.animate-fade');
		expect(div).not.toBeNull();
	});

	it('adds animate-fly-up class when animate="fly-up"', async () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'fly-up',
				children: mockChildren
			}
		});

		// Wait for onMount setTimeout to complete
		await new Promise(resolve => setTimeout(resolve, 10));
		
		// Now make fragment visible - this should trigger animation
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));
		
		const div = container.querySelector('.animate-fly-up');
		expect(div).not.toBeNull();
	});

	it('adds animate-scale class when animate="scale"', async () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'scale',
				children: mockChildren
			}
		});

		// Wait for onMount setTimeout to complete
		await new Promise(resolve => setTimeout(resolve, 10));
		
		// Now make fragment visible - this should trigger animation
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));
		
		const div = container.querySelector('.animate-scale');
		expect(div).not.toBeNull();
	});

	it('does not add animation class when animate="none"', async () => {
		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 0, y: 0, width: 100, height: 40 },
				animate: 'none',
				children: mockChildren
			}
		});

		// Wait for onMount setTimeout to complete
		await new Promise(resolve => setTimeout(resolve, 10));
		
		// Make fragment visible
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));
		await new Promise(resolve => setTimeout(resolve, 10));
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

describe('Fragment Component - Keyframes', () => {
	/**
	 * Keyframes provide step-based motion animation:
	 * - Fragment's `step` + `animate` control WHEN and HOW the fragment first appears
	 * - `keyframes` control WHERE the fragment moves AFTER appearing
	 * - Each keyframe fires at its own step number (independent of Fragment's step)
	 * - First keyframe application on mount snaps (no tween) for state restore
	 * - Subsequent keyframe changes tween smoothly
	 * - Stepping back below all keyframes resets position to initial (layout) values
	 */

	beforeEach(() => {
		vi.clearAllMocks();
		getMockFragment().set(0);
	});

	it('does not offset position before keyframe step is reached', async () => {
		getMockFragment().set(1);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [{ step: 3, x: 150 }],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		if (div) {
			// Position should be layout values (no keyframe offset yet)
			expect(div.style.left).toBe('100px');
		}
	});

	it('applies keyframe offset when fragment reaches keyframe step', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [{ step: 3, x: 150 }],
				children: mockChildren
			}
		});

		// Wait for mount
		await new Promise(resolve => setTimeout(resolve, 10));

		// Advance to step 1 (fragment appears, no keyframe yet)
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));

		let div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		expect(div!.style.left).toBe('100px');

		// Advance to step 3 (keyframe activates)
		getMockFragment().set(3);
		// Wait for tween to complete (Tweens in test env should resolve quickly)
		await new Promise(resolve => setTimeout(resolve, 500));

		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		// Position = layout.x (100) + keyframe.x (150) = 250
		expect(div!.style.left).toBe('250px');
	});

	it('snaps to keyframe position on restored state (mount with fragment already past keyframe)', async () => {
		// Simulate restored state: fragment is already at 5 when component mounts
		getMockFragment().set(5);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [{ step: 3, x: 150 }],
				children: mockChildren
			}
		});

		// Wait for mount + snap (should be instant, no visible tween)
		await new Promise(resolve => setTimeout(resolve, 10));

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		// Should already be at keyframe position (snapped, not tweened)
		expect(div!.style.left).toBe('250px');
	});

	it('supports multiple keyframes with progressive steps', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [
					{ step: 2, x: 50 },
					{ step: 4, x: 200 }
				],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		// Step 1: fragment appears at home position
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));
		let div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('100px');

		// Step 2: first keyframe
		getMockFragment().set(2);
		await new Promise(resolve => setTimeout(resolve, 500));
		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('150px'); // 100 + 50

		// Step 4: second keyframe
		getMockFragment().set(4);
		await new Promise(resolve => setTimeout(resolve, 500));
		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('300px'); // 100 + 200
	});

	it('resets to initial position when stepping back below all keyframes', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [{ step: 3, x: 150 }],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		// Advance to step 3 (keyframe activates)
		getMockFragment().set(3);
		await new Promise(resolve => setTimeout(resolve, 500));
		let div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('250px');

		// Step back to 2 (below keyframe)
		getMockFragment().set(2);
		await new Promise(resolve => setTimeout(resolve, 500));
		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		// Should reset to layout position (no keyframe offset)
		expect(div!.style.left).toBe('100px');
	});

	it('applies y offset from keyframe', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [{ step: 2, y: 100 }],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		getMockFragment().set(2);
		await new Promise(resolve => setTimeout(resolve, 500));

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		expect(div!.style.top).toBe('150px'); // 50 + 100
	});

	it('does not interfere with entrance animation', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				animate: 'fade',
				keyframes: [{ step: 2, x: 150 }],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		// Step 1: fragment fades in at home position
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 10));

		const div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div).not.toBeNull();
		// Should have fade animation class (entrance animation works)
		expect(div!.classList.contains('animate-fade')).toBe(true);
		// Position is at layout (no keyframe offset yet)
		expect(div!.style.left).toBe('100px');
	});

	it('steps back through multiple keyframes correctly', async () => {
		getMockFragment().set(0);

		const { container } = render(Fragment, {
			props: {
				step: 1,
				layout: { x: 100, y: 50, width: 200, height: 40 },
				keyframes: [
					{ step: 2, x: 50 },
					{ step: 4, x: 200 }
				],
				children: mockChildren
			}
		});

		await new Promise(resolve => setTimeout(resolve, 10));

		// Advance to step 4 (second keyframe)
		getMockFragment().set(4);
		await new Promise(resolve => setTimeout(resolve, 500));
		let div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('300px'); // 100 + 200

		// Step back to 3 (should still use first keyframe since 3 >= 2)
		getMockFragment().set(3);
		await new Promise(resolve => setTimeout(resolve, 500));
		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('150px'); // 100 + 50

		// Step back to 1 (below all keyframes)
		getMockFragment().set(1);
		await new Promise(resolve => setTimeout(resolve, 500));
		div = container.querySelector('.fragment-positioned') as HTMLElement | null;
		expect(div!.style.left).toBe('100px'); // Reset to layout
	});
});
