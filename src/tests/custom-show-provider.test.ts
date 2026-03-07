import { describe, it, expect } from 'vitest';
import { getSlideForFragment, getSlideFragmentOffsets, getTotalFragments } from '$lib/components/customShowUtils';

/**
 * Unit tests for CustomShowProvider's getSlideForFragment algorithm.
 * 
 * This function maps a global fragment position to the slide index and local fragment
 * within that slide.
 * 
 * Key concepts:
 * - Each slide has a maxStep (number of animated fragments, 0 if static-only)
 * - Offset = sum of all previous slides' (maxStep + 1)
 * - A slide "owns" global fragments from offset to offset + maxStep (inclusive)
 * - Every slide starts at local fragment 0 (static view)
 */

describe('offset and total helpers', () => {
	it('computes offsets with a static local 0 for every slide', () => {
		expect(getSlideFragmentOffsets([3, 2, 1])).toEqual([0, 4, 7]);
	});

	it('computes total maxFragment including slide transition positions', () => {
		expect(getTotalFragments([3, 2])).toBe(6); // positions 0..6
		expect(getTotalFragments([2, 0])).toBe(3); // positions 0..3
		expect(getTotalFragments([0, 0])).toBe(1); // positions 0..1
	});
});

describe('getSlideForFragment', () => {
	describe('two slides with steps', () => {
		// SlideA: 3 steps, SlideB: 2 steps
		// Offsets: [0, 4]
		// SlideA owns fragments 0, 1, 2, 3 (offset 0, maxStep 3)
		// SlideB owns fragments 4, 5, 6 (offset 4, maxStep 2)
		const slideMaxSteps = [3, 2];

		it('fragment 0 belongs to slide 0', () => {
			const result = getSlideForFragment(0, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 0 });
		});

		it('fragment 1 belongs to slide 0 (first animated step)', () => {
			const result = getSlideForFragment(1, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 1 });
		});

		it('fragment 3 belongs to slide 0 (last step)', () => {
			const result = getSlideForFragment(3, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 3 });
		});

		it('fragment 4 belongs to slide 1 (static local 0)', () => {
			// Slide B starts at local fragment 0.
			const result = getSlideForFragment(4, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 0 });
		});

		it('fragment 5 belongs to slide 1 (first animated step)', () => {
			const result = getSlideForFragment(5, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 1 });
		});

		it('fragment 6 belongs to slide 1 (last step)', () => {
			const result = getSlideForFragment(6, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 2 });
		});
	});

	describe('boundary condition: fragment at exact boundary', () => {
		// This is the critical case that was buggy before the fix
		// SlideA: maxStep=4, SlideB: maxStep=2
		// Offsets: [0, 5]
		// 
		// Fragment 4 should belong to SlideA (its last step),
		// NOT to SlideB (which starts at offset 5)
		const slideMaxSteps = [4, 2];

		it('fragment 4 belongs to slide 0 (its last step), not slide 1', () => {
			const result = getSlideForFragment(4, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 4 });
		});

		it('fragment 5 belongs to slide 1 (static local 0)', () => {
			const result = getSlideForFragment(5, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 0 });
		});
	});

	describe('static-only second slide (maxStep=0)', () => {
		// hebrews-3-14 case: Content1 has steps, Content2 is static-only
		// SlideA: maxStep=2, SlideB: maxStep=0
		// 
		// - SlideA offset=0, owns fragments 0,1,2
		// - SlideB offset=3, owns fragment 3 (local 0)
		// 
		// Total maxFragment = 3 (positions 0..3)
		// This allows navigation to show SlideB's static content before auto-return
		const slideMaxSteps = [2, 0];

		it('fragment 0 belongs to slide 0', () => {
			const result = getSlideForFragment(0, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 0 });
		});

		it('fragment 2 belongs to slide 0 (last step)', () => {
			const result = getSlideForFragment(2, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 2 });
		});

		it('fragment 3 belongs to slide 1 (static content, local=0)', () => {
			const result = getSlideForFragment(3, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 0 });
		});
	});

	describe('static-only first slide (maxStep=0)', () => {
		// Edge case: first slide is static-only
		// SlideA: maxStep=0, SlideB: maxStep=2
		// 
		// - SlideA offset=0, owns fragment 0
		// - SlideB offset=1, owns fragments 1,2,3
		const slideMaxSteps = [0, 2];

		it('fragment 0 belongs to slide 0 (static content)', () => {
			const result = getSlideForFragment(0, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 0 });
		});

		it('fragment 1 belongs to slide 1 (static local 0)', () => {
			const result = getSlideForFragment(1, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 0 });
		});

		it('fragment 2 belongs to slide 1 (first animated step)', () => {
			const result = getSlideForFragment(2, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 1 });
		});
	});

	describe('three slides with varying steps', () => {
		// SlideA: 2 steps, SlideB: 3 steps, SlideC: 1 step
		// Offsets: [0, 3, 7]
		// SlideA owns 0, 1, 2
		// SlideB owns 3, 4, 5, 6
		// SlideC owns 7, 8
		const slideMaxSteps = [2, 3, 1];

		it('fragment 0 belongs to slide 0', () => {
			const result = getSlideForFragment(0, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 0 });
		});

		it('fragment 2 belongs to slide 0 (last step)', () => {
			const result = getSlideForFragment(2, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 0, localFragment: 2 });
		});

		it('fragment 3 belongs to slide 1 (static local 0)', () => {
			const result = getSlideForFragment(3, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 0 });
		});

		it('fragment 5 belongs to slide 1 (last step)', () => {
			const result = getSlideForFragment(5, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 1, localFragment: 2 });
		});

		it('fragment 7 belongs to slide 2 (static local 0)', () => {
			const result = getSlideForFragment(7, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 2, localFragment: 0 });
		});

		it('fragment 8 belongs to slide 2 (first and only animated step)', () => {
			const result = getSlideForFragment(8, slideMaxSteps);
			expect(result).toEqual({ slideIndex: 2, localFragment: 1 });
		});
	});
});
