import { test, expect } from '@playwright/test';
import { pressArrowRight } from '../utils/test-helpers';

/**
 * Ark Presentation E2E Tests
 * 
 * Tests for production content in the ark presentation.
 * Tests CustomShowProvider with real romans-6-3 custom show.
 */

test.describe('Ark - Romans 6:3 Custom Show', () => {
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

	test('standalone routes work for individual slides', async ({ page }) => {
		// baptism-and-faith standalone should work
		await page.goto('/ark/baptism-and-faith');
		await expect(page).toHaveURL('/ark/baptism-and-faith');
		await expect(page.getByText('Romans 6:3-7,17-18, 22-23')).toBeVisible();
		
		// ephesians-2-8 standalone should work
		await page.goto('/ark/ephesians-2-8');
		await expect(page).toHaveURL('/ark/ephesians-2-8');
		await expect(page.getByText('Ephesians 2:8-9')).toBeVisible();
	});
});
