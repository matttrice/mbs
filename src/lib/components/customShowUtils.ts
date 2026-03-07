/**
 * Utility functions for CustomShowProvider's fragment/slide mapping.
 *
 * These functions handle the mapping between global fragment positions
 * and slide-local fragment positions in multi-slide custom shows.
 */

export interface SlidePosition {
	slideIndex: number;
	localFragment: number;
}

/**
 * Compute the starting fragment offset for each slide.
 * Each slide occupies at least 1 fragment position (for static content).
 *
 * @param slideMaxSteps - Array of maxStep values for each slide
 * @returns Array of offsets where offsets[i] = starting fragment for slide i
 */
export function getSlideFragmentOffsets(slideMaxSteps: number[]): number[] {
	const offsets: number[] = [0];
	for (let i = 1; i < slideMaxSteps.length; i++) {
		// Each slide owns local fragment 0 (static view) plus its animated steps.
		// Example: maxStep 3 => local fragments 0,1,2,3 (count = 4).
		offsets.push(offsets[i - 1] + slideMaxSteps[i - 1] + 1);
	}
	return offsets;
}

/**
 * Compute total fragments across all slides.
 * Each slide contributes at least 1 fragment (for static content view).
 *
 * @param slideMaxSteps - Array of maxStep values for each slide
 * @returns Total number of fragments
 */
export function getTotalFragments(slideMaxSteps: number[]): number {
	if (slideMaxSteps.length === 0) return 0;
	// Total positions is sum(maxStep + 1) for each slide; maxFragment is last index.
	const totalPositions = slideMaxSteps.reduce((sum, max) => sum + max + 1, 0);
	return totalPositions - 1;
}

/**
 * Map a global fragment position to the slide index and local fragment.
 *
 * Key concepts:
 * - Each slide has a maxStep (number of animated fragments, 0 if static-only)
 * - Offset = sum of all previous slides' (maxStep + 1)
 * - A slide "owns" global fragments from offset to offset + maxStep (inclusive)
 * - Every slide starts at local fragment 0 (its static state)
 *
 * Offset calculation example:
 * - Slide 0: offset=0, maxStep=4 → owns global fragments 0,1,2,3,4
 * - Slide 1: offset=5, maxStep=2 → owns global fragments 5,6,7
 *
 * Boundary handling:
 * - At globalFragment = 4, slide 0 wins (its last step) not slide 1
 * - At globalFragment = 5, slide 1 is at local fragment 0 (static state)
 * - We iterate first-to-last with <= for upper bound; first match wins
 *
 * @param globalFragment - The global fragment position
 * @param slideMaxSteps - Array of maxStep values for each slide
 * @returns The slide index and local fragment position
 */
export function getSlideForFragment(
	globalFragment: number,
	slideMaxSteps: number[]
): SlidePosition {
	const slideCount = slideMaxSteps.length;
	const offsets = getSlideFragmentOffsets(slideMaxSteps);

	for (let i = 0; i < slideCount; i++) {
		const slideOffset = offsets[i];
		// Each slide owns local fragments 0..maxStep (inclusive).
		const upperBound = slideOffset + slideMaxSteps[i];

		// Slide i owns fragments where: offset <= globalFragment <= offset + maxStep
		if (globalFragment >= slideOffset && globalFragment <= upperBound) {
			return {
				slideIndex: i,
				localFragment: globalFragment - slideOffset
			};
		}
	}

	// Fallback: return last slide
	const lastSlide = slideCount - 1;
	return {
		slideIndex: lastSlide,
		localFragment: globalFragment - offsets[lastSlide]
	};
}
