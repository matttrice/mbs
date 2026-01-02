import { test, expect } from '@playwright/test';

/**
 * Integration tests for drill navigation with auto-drill functionality.
 * These tests verify the complete flow of:
 * 1. Navigating through fragments
 * 2. Drilling into sub-routes (Custom Shows)
 * 3. Returning to exact position after drill
 * 4. Auto-drill behavior with mbs-drillto setting
 */

// Helper to reset navigation state and wait for presentation to be ready
async function resetAndWaitForPresentation(page: import('@playwright/test').Page, options?: { autoDrillAll?: boolean }) {
	// Go to presentation first (need origin for localStorage access)
	await page.goto('/promises');
	
	// Clear localStorage and set options
	await page.evaluate((opts) => {
		localStorage.clear();
		if (opts?.autoDrillAll === false) {
			localStorage.setItem('mbs-drillto', 'false');
		}
	}, options);
	
	// Hard reload to get fresh state (clears any in-memory navigation state)
	await page.reload();
	
	// Wait for title and indicator to be active (indicates init() ran)
	await expect(page.getByText('The Promises')).toBeVisible({ timeout: 10000 });
	await expect(page.locator('.indicator-dot.active')).toBeVisible({ timeout: 5000 });
	
	// Wait for the first fragment to be present (even if not visible)
	await expect(page.locator('.fragment').first()).toBeAttached({ timeout: 5000 });
	
	// Verify we're starting at fragment 0 (Genesis 12:1-3 should NOT be visible yet)
	await expect(page.getByText('Genesis 12:1-3')).not.toBeVisible();
	
	// Focus the page to ensure keyboard events work
	await page.locator('body').focus();
	await page.locator('body').click();
}

// Helper to press arrow key
async function pressArrowRight(page: import('@playwright/test').Page) {
	await page.keyboard.press('ArrowRight');
	// Small wait for state update
	await page.waitForTimeout(100);
}

test.describe('Drill Navigation - autoDrillAll enabled (default)', () => {
	test.beforeEach(async ({ page }) => {
		await resetAndWaitForPresentation(page);
	});

	test('drills into correct route from slide 1 step 1', async ({ page }) => {
		// Click next to reveal step 1 (Genesis 12:1-3)
		await pressArrowRight(page);
		
		// Wait for fragment to be visible (Playwright auto-waits)
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// Verify URL hasn't changed yet (fragment is shown, pending drill set)
		await expect(page).toHaveURL('/promises');
		
		// Click next again to execute the pending drill
		await pressArrowRight(page);
		
		// Should navigate to the genesis-12-1 drill route
		await expect(page).toHaveURL('/promises/genesis-12-1');
	});

	test('returns to exact position after drill completes', async ({ page }) => {
		// Navigate to step 1 (Genesis 12:1-3)
		await pressArrowRight(page);
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// Execute drill
		await pressArrowRight(page);
		await expect(page).toHaveURL('/promises/genesis-12-1');
		
		// Navigate through the drill and return
		// Keep pressing right until we're back at /promises
		await expect(async () => {
			await page.keyboard.press('ArrowRight');
			const url = page.url();
			expect(url).toContain('/promises');
			expect(url).not.toContain('genesis-12-1');
		}).toPass({ timeout: 10000 });
		
		// Should be back at promises, at fragment 1 (exact position)
		await expect(page).toHaveURL('/promises');
		// The Genesis 12:1-3 fragment should still be visible
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
	});
});

test.describe('Drill Navigation - autoDrillAll disabled', () => {
	test.beforeEach(async ({ page }) => {
		await resetAndWaitForPresentation(page, { autoDrillAll: false });
	});

	test('does not auto-drill at mid-slide fragments when autoDrillAll is disabled', async ({ page }) => {
		// Navigate to step 1 (Genesis 12:1-3)
		await pressArrowRight(page);
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// With autoDrillAll disabled, next click should advance to step 2, not drill
		await pressArrowRight(page);
		
		// Should still be on promises (not drilled)
		await expect(page).toHaveURL('/promises');
		
		// Step 3 content should appear (Great Nation)
		await pressArrowRight(page);
		await expect(page.getByText('Great Nation')).toBeVisible();
		await expect(page).toHaveURL('/promises');
	});

	test('clicking on drillable fragment still drills when autoDrillAll is disabled', async ({ page }) => {
		// Navigate to step 1 to reveal Genesis 12:1-3
		await pressArrowRight(page);
		const drillable = page.getByText('Genesis 12:1-3');
		await expect(drillable).toBeVisible();
		
		// Click directly on the drillable fragment
		await drillable.click();
		
		// Should drill into the route
		await expect(page).toHaveURL('/promises/genesis-12-1');
	});
});

test.describe('Drill Navigation - slide position preservation', () => {
	test.beforeEach(async ({ page }) => {
		await resetAndWaitForPresentation(page);
	});

	test('preserves slide fragment position when navigating between slides', async ({ page }) => {
		// Advance to step 1
		await pressArrowRight(page);
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// This will set pending drill, next click executes it
		await pressArrowRight(page);
		await expect(page).toHaveURL('/promises/genesis-12-1');
		
		// Navigate through drill to return
		await expect(async () => {
			await page.keyboard.press('ArrowRight');
			const url = page.url();
			expect(url).toContain('/promises');
			expect(url).not.toContain('genesis-12-1');
		}).toPass({ timeout: 10000 });
		
		// Now we should be on promises, fragment position preserved
		await expect(page).toHaveURL('/promises');
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
	});
});
