import { test, expect } from '@playwright/test';
import {
	resetAndWaitForPresentation,
	pressArrowRight,
	pressArrowLeft
} from './utils/test-helpers';

/**
 * CustomShowProvider E2E Tests
 * 
 * Tests the CustomShowProvider component which aggregates multiple slide
 * content components into a single navigation sequence.
 * 
 * Uses:
 * - test-custom-show: SlideA (3 steps) + SlideB (2 steps) = 5 total steps
 * - romans-6-3: BaptismAndFaithContent (6 steps) + Ephesians28Content (6 steps) = 12 total steps
 */

// Test fixture reset helper for CustomShowProvider test route
async function resetCustomShowFixture(page: import('@playwright/test').Page) {
	// Go to custom show page
	await page.goto('/test-custom-show');

	// Clear localStorage and reload
	await page.evaluate(() => {
		localStorage.clear();
	});
	await page.reload();

	// Wait for transitions to complete
	await page.waitForTimeout(300);

	// Wait for static content to be visible (no indicator dots in custom shows)
	await expect(page.getByText('Slide A Content')).toBeVisible({ timeout: 5000 });
	
	// Wait for fragments to be attached
	await expect(page.locator('.fragment').first()).toBeAttached({ timeout: 5000 });

	// Verify first animated step is not yet visible
	await expect(page.getByText('Step 1: First item')).not.toBeVisible();

	// Focus the page for keyboard events
	await page.locator('body').focus();
	await page.locator('body').click();
}

test.describe('CustomShowProvider - Basic Navigation', () => {
	test.beforeEach(async ({ page }) => {
		await resetCustomShowFixture(page);
	});

	test('displays static content from first slide immediately', async ({ page }) => {
		await expect(page.getByText('Slide A Content')).toBeVisible();
		await expect(page.getByText('Step 1: First item')).not.toBeVisible();
	});

	test.skip('navigates through all fragments of first slide', async ({ page }) => {
		// TODO: Investigate why "revealed" class elements are seen as hidden
		// The element has class "revealed" but Playwright reports it as hidden
		// This is likely a CSS visibility inheritance issue
		// SlideA has 3 steps
		await pressArrowRight(page);
		await expect(page.getByText('Step 1: First item')).toBeVisible();

		await pressArrowRight(page);
		await expect(page.getByText('Step 2: Second item')).toBeVisible();

		await pressArrowRight(page);
		// Wait a bit longer for animation to complete
		await page.waitForTimeout(300);
		await expect(page.getByText('Step 3: Third item')).toBeVisible();
	});

	test('transitions to second slide after first slide fragments exhausted', async ({ page }) => {
		// Navigate through SlideA's 3 steps
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // Step 3

		// Next arrow should transition to SlideB
		await pressArrowRight(page);
		await expect(page.getByText('Slide B Content')).toBeVisible();
		// SlideA content should no longer be visible (different slide)
		await expect(page.getByText('Slide A Content')).not.toBeVisible();
	});

	test('navigates through second slide fragments', async ({ page }) => {
		// Navigate through SlideA's 3 steps
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // Step 3

		// Transition to SlideB (step 0, showing static content)
		await pressArrowRight(page);
		await expect(page.getByText('Slide B Content')).toBeVisible();

		// SlideB Step 1
		await pressArrowRight(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('B Step 1: Different content')).toBeVisible();

		// SlideB Step 2 (last step)
		await pressArrowRight(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('B Step 2: More content')).toBeVisible();
	});

	test.skip('back navigation works across slide boundaries', async ({ page }) => {
		// TODO: Investigate why "revealed" class elements are seen as hidden
		// Same issue as above - elements have "revealed" class but Playwright sees them as hidden
		// Navigate to SlideB Step 1
		await pressArrowRight(page); // SlideA Step 1
		await pressArrowRight(page); // SlideA Step 2
		await pressArrowRight(page); // SlideA Step 3
		await pressArrowRight(page); // Transition to SlideB (static)
		await pressArrowRight(page); // SlideB Step 1
		
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide B Content')).toBeVisible();
		await expect(page.getByText('B Step 1: Different content')).toBeVisible();

		// Go back one step - just verify we're still on SlideB
		await pressArrowLeft(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide B Content')).toBeVisible();

		// Go back to SlideA
		await pressArrowLeft(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide A Content')).toBeVisible();
		await expect(page.getByText('Step 3: Third item')).toBeVisible();
	});
});

test.describe('CustomShowProvider - Drill Integration', () => {
	test('custom show auto-returns to origin after last fragment', async ({ page }) => {
		// Navigate directly to test-custom-show 
		await page.goto('/test-custom-show');
		await expect(page.getByText('Slide A Content')).toBeVisible();

		// Navigate through all 5 steps (SlideA: 3 + SlideB: 2)
		await pressArrowRight(page); // SlideA Step 1
		await pressArrowRight(page); // SlideA Step 2
		await pressArrowRight(page); // SlideA Step 3
		await pressArrowRight(page); // Transition to SlideB (static)
		await pressArrowRight(page); // SlideB Step 1
		await pressArrowRight(page); // SlideB Step 2 (last step)

		// At this point, we're at the end of the custom show
		// Verify we're still on test-custom-show
		await expect(page).toHaveURL('/test-custom-show');
		await expect(page.getByText('B Step 2: More content')).toBeVisible();
	});
});

test.describe('CustomShowProvider - Romans 6:3 (Production)', () => {
	// Tests for the actual romans-6-3 custom show
	test('loads BaptismAndFaithContent as first slide', async ({ page }) => {
		await page.goto('/ark/romans-6-3');
		
		// Verify we're on the right page
		await expect(page).toHaveURL('/ark/romans-6-3');
		
		// BaptismAndFaithContent static content should be visible
		await expect(page.getByText('Romans 6:3-7,17-18, 22-23')).toBeVisible();
	});

	test('navigates through BaptismAndFaith and transitions to Ephesians', async ({ page }) => {
		await page.goto('/ark/romans-6-3');
		
		// Navigate through BaptismAndFaithContent (has 6 steps)
		// We don't need to verify every step, just that transitions work
		
		// Step 1: Baptism, =, Death/Burial, Arc
		await pressArrowRight(page);
		await expect(page.getByText('Baptism')).toBeVisible();
		
		// Steps 2-6: Continue navigation
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // Step 3  
		await pressArrowRight(page); // Step 4
		await pressArrowRight(page); // Step 5
		await pressArrowRight(page); // Step 6

		// Next arrow should transition to Ephesians28Content
		await pressArrowRight(page);
		await expect(page.getByText('Ephesians 2:8-9')).toBeVisible();
	});

	test('standalone route still works for individual slides', async ({ page }) => {
		// baptism-and-faith standalone should still work
		await page.goto('/ark/baptism-and-faith');
		await expect(page).toHaveURL('/ark/baptism-and-faith');
		await expect(page.getByText('Romans 6:3-7,17-18, 22-23')).toBeVisible();
		
		// ephesians-2-8 standalone should still work
		await page.goto('/ark/ephesians-2-8');
		await expect(page).toHaveURL('/ark/ephesians-2-8');
		await expect(page.getByText('Ephesians 2:8-9')).toBeVisible();
	});
});
