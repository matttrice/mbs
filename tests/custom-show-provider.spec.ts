import { test, expect } from '@playwright/test';
import {
	pressArrowRight,
	pressArrowLeft
} from './utils/test-helpers';

/**
 * CustomShowProvider E2E Tests
 * 
 * Tests the CustomShowProvider component which aggregates multiple slide
 * content components into a single navigation sequence.
 * 
 * Uses test-custom-show fixture:
 * - SlideA (3 steps) + SlideB (2 steps) = 5 total steps
 * 
 * This test file uses only the test fixture, not production content.
 * Production content tests are in presentations/*.spec.ts files.
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

	test('navigates through all fragments of first slide', async ({ page }) => {
		// SlideA has 3 steps
		await pressArrowRight(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Step 1: First item')).toBeVisible();

		await pressArrowRight(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Step 2: Second item')).toBeVisible();

		await pressArrowRight(page);
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

		// Transition to SlideB — Step 1 is immediately visible (local fragment = 1)
		await pressArrowRight(page);
		await expect(page.getByText('Slide B Content')).toBeVisible();
		await page.waitForTimeout(300);
		await expect(page.getByText('B Step 1: Different content')).toBeVisible();

		// SlideB Step 2 (last fragment)
		await pressArrowRight(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('B Step 2: More content')).toBeVisible();
	});

	test('back navigation works across slide boundaries', async ({ page }) => {
		// Navigate to SlideB Step 2 (fragment 5, local 2)
		await pressArrowRight(page); // SlideA Step 1 (fragment 1)
		await pressArrowRight(page); // SlideA Step 2 (fragment 2)
		await pressArrowRight(page); // SlideA Step 3 (fragment 3)
		await pressArrowRight(page); // Transition to SlideB (fragment 4, local 1)
		await pressArrowRight(page); // SlideB Step 2 (fragment 5, local 2)
		
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide B Content')).toBeVisible();
		await expect(page.getByText('B Step 2: More content')).toBeVisible();

		// Go back one step — SlideB local 1 (Step 1 still visible, Step 2 hidden)
		await pressArrowLeft(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide B Content')).toBeVisible();

		// Go back to SlideA (fragment 3, local 3)
		await pressArrowLeft(page);
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide A Content')).toBeVisible();
	});
});

test.describe('CustomShowProvider - Drill Integration', () => {
	test('custom show navigates to home after last fragment when standalone', async ({ page }) => {
		// Navigate directly to test-custom-show (not drilled into)
		// Use proper reset to ensure clean state
		await page.goto('/test-custom-show');
		await page.evaluate(() => { localStorage.clear(); });
		await page.reload();
		await page.waitForTimeout(300);
		await expect(page.getByText('Slide A Content')).toBeVisible({ timeout: 5000 });
		await expect(page.locator('.fragment').first()).toBeAttached({ timeout: 5000 });
		await page.locator('body').focus();
		await page.locator('body').click();

		// Navigate through all 5 fragments (SlideA: 3 + SlideB: 2)
		await pressArrowRight(page); // SlideA Step 1 (fragment 1)
		await pressArrowRight(page); // SlideA Step 2 (fragment 2)
		await pressArrowRight(page); // SlideA Step 3 (fragment 3)
		await pressArrowRight(page); // Transition to SlideB (fragment 4)
		await pressArrowRight(page); // SlideB Step 2 (fragment 5, last)

		// Verify we're at the end with content visible
		await expect(page).toHaveURL('/test-custom-show');
		await expect(page.getByText('B Step 2: More content')).toBeVisible();

		// One more press at end of presentation → navigates to home
		await pressArrowRight(page);
		await page.waitForTimeout(500);
		await expect(page).toHaveURL('/');
	});
});
