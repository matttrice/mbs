import { test, expect } from '@playwright/test';
import { pressArrowRight } from '../utils/test-helpers';

/**
 * Ark Presentation E2E Tests
 * 
 * Tests for production content in the ark presentation.
 * Tests CustomShowProvider with real romans-6-3 custom show.
 */

test.describe('Ark - Romans 6:3 Custom Show', () => {
	test('loads first slide', async ({ page }) => {
		await page.goto('/ark/baptism-and-faith');
		
		// Verify we're on the right page
		await expect(page).toHaveURL('/ark/baptism-and-faith');

		await expect(page.getByText('Romans 6:3-7, 17-18, 22-23')).toBeVisible();
	});

	test('navigates through BaptismAndFaith and transitions to Ephesians', async ({ page }) => {
		await page.goto('/ark/baptism-and-faith');
		
		// Wait for initialization
		await page.waitForTimeout(300);
		
		// Navigate through BaptismAndFaithContent (has 6 steps with substeps)
		// Step 1: Baptism, =, Death/Burial, Arc
		await pressArrowRight(page);
		await expect(page.getByText('Baptism', { exact: true })).toBeVisible();
		
		// Steps 2-6: Continue navigation
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // Step 3
		await pressArrowRight(page); // Step 4
		await pressArrowRight(page); // Step 5
		await pressArrowRight(page); // Step 6
		
		// Should still be on Content1 at step 6
		await expect(page.getByText('22 But now having been freed from sin')).toBeVisible();
		
		// Navigate to Content2 - need extra press(es) due to initialization timing
		await pressArrowRight(page); 
		await pressArrowRight(page);
		
		await expect(page.getByText('Ephesians 2:8-9')).toBeVisible();
	});
});
