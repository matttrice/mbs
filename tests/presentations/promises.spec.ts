import { test, expect } from '@playwright/test';
import {
	resetAndWaitForPresentation,
	pressArrowRight,
	navigateThroughDrillAndReturn
} from '../utils/test-helpers';

/**
 * Promises Presentation E2E Tests
 * 
 * Tests specific to the "The Promises" presentation (/promises route).
 * These tests verify real presentation content and may need updates
 * if the presentation structure changes.
 */

// Promises-specific reset helper
async function resetPromises(page: import('@playwright/test').Page, options?: { autoDrillAll?: boolean }) {
	await resetAndWaitForPresentation(page, {
		route: '/promises',
		autoDrillAll: options?.autoDrillAll ?? true,
		readyText: 'The Promises',
		notVisibleText: 'Great Nation'  // Step-controlled content (step 3) that shouldn't be visible at start
	});
}

test.describe('Promises - autoDrillAll enabled (default)', () => {
	test.beforeEach(async ({ page }) => {
		await resetPromises(page);
	});

	test('drills into correct route from slide 1 step 1', async ({ page }) => {
		// Genesis 12:1-3 is visible on page load (no step = static content)
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// With autoDrillAll enabled, stepless drillTo fragments set a pending drill on mount.
		// First ArrowRight executes the pending drill directly.
		await pressArrowRight(page);
		
		// Should navigate to the genesis-12-1 drill route
		await expect(page).toHaveURL('/promises/genesis-12-1');
	});

	test('returns to exact position after drill completes', async ({ page }) => {
		// Genesis 12:1-3 is visible on load (static content)
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// Execute drill (pending from mount)
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
		
		// Should be back at promises, at fragment 0 (exact position)
		await expect(page).toHaveURL('/promises');
		// The Genesis 12:1-3 fragment should still be visible
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
	});
});

test.describe('Promises - autoDrillAll disabled', () => {
	test.beforeEach(async ({ page }) => {
		await resetPromises(page, { autoDrillAll: false });
	});

	test('does not auto-drill at mid-slide fragments when autoDrillAll is disabled', async ({ page }) => {
		// Genesis 12:1-3 is visible (no step, always visible)
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// With autoDrillAll disabled, no pending drill is set for stepless fragments.
		// First ArrowRight advances to step 2 (grey background), no drill occurs.
		await pressArrowRight(page);
		await expect(page).toHaveURL('/promises');
		
		// Next click advances to step 3 (Great Nation)
		await pressArrowRight(page);
		await expect(page.getByText('Great Nation')).toBeVisible();
		await expect(page).toHaveURL('/promises');
	});

	test('clicking on drillable fragment still drills when autoDrillAll is disabled', async ({ page }) => {
		// Genesis 12:1-3 is visible on load (static content)
		const drillable = page.getByText('Genesis 12:1-3');
		await expect(drillable).toBeVisible();
		
		// Click directly on the drillable fragment
		await drillable.click();
		
		// Should drill into the route
		await expect(page).toHaveURL('/promises/genesis-12-1');
	});
});

test.describe('Promises - slide position preservation', () => {
	test.beforeEach(async ({ page }) => {
		await resetPromises(page);
	});

	test('preserves slide fragment position when navigating between slides', async ({ page }) => {
		// Genesis 12:1-3 is visible on load (static content)
		await expect(page.getByText('Genesis 12:1-3')).toBeVisible();
		
		// First ArrowRight executes the pending drill (autoDrillAll on)
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
