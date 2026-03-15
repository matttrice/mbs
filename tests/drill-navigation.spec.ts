import { test, expect } from '@playwright/test';
import {
	resetAndWaitForPresentation,
	pressArrowRight,
	pressArrowLeft
} from './utils/test-helpers';

/**
 * Core Drill Navigation E2E Tests
 * 
 * Uses the test-fixture presentation for controlled, predictable testing.
 * These tests verify fundamental drill navigation behavior independent
 * of specific presentation content.
 * 
 * Test Fixture Structure:
 * - Slide 1: "First Fragment" (drillTo drill-01), "Second Fragment"
 * - Slide 2: "Multi Drill Start" (drillTo drill-01 → drill-02 → drill-03)
 * 
 * Drill chain (mirrors promises/hebrews-3-14 → hebrews-4-1 pattern):
 * - drill-01 → drill-02 → drill-03 → returns to origin
 */

// Test fixture reset helper
async function resetFixture(page: import('@playwright/test').Page, options?: { autoDrillAll?: boolean }) {
	await resetAndWaitForPresentation(page, {
		route: '/test-fixture',
		autoDrillAll: options?.autoDrillAll ?? true,
		readyText: 'Test Fixture',
		notVisibleText: 'First Fragment'
	});
}

test.describe('Basic Drill Navigation (autoDrillAll disabled)', () => {
	// Use autoDrillAll=false to test single-level drill behavior
	// Arrow keys skip drills, allowing isolated testing
	test.beforeEach(async ({ page }) => {
		await resetFixture(page, { autoDrillAll: false });
	});

	test('click drills into route and returns to exact position', async ({ page }) => {
		// Step 1: Show "First Fragment" (has drillTo)
		await pressArrowRight(page);
		const drillable = page.getByText('First Fragment');
		await expect(drillable).toBeVisible();
		await expect(page).toHaveURL('/test-fixture');

		// Click to execute drill (arrow would skip with autoDrillAll=false)
		await drillable.click();
		await expect(page).toHaveURL('/test-fixture/drill-01');
		await expect(page.getByText('Drill Level 1')).toBeVisible();

		// Navigate through drill-01 step 1
		await pressArrowRight(page);
		await expect(page.getByText('First level drill content')).toBeVisible();

		// drill-01 step 2 has drillTo drill-02 - with autoDrillAll=false, arrow skips it
		await pressArrowRight(page);
		await expect(page.getByText('Go to Level 2')).toBeVisible();
		
		// Next arrow returns to main (since autoDrillAll=false skips the drillTo)
		await pressArrowRight(page);
		await expect(page).toHaveURL('/test-fixture');
		
		// Should be back at fragment 1, First Fragment still visible
		await expect(page.getByText('First Fragment')).toBeVisible();
	});

	test('drill, return, go back, then drill again works', async ({ page }) => {
		// First drill cycle
		await pressArrowRight(page); // Show First Fragment
		const drillable = page.getByText('First Fragment');
		await expect(drillable).toBeVisible();
		
		await drillable.click(); // Click to drill
		await expect(page).toHaveURL('/test-fixture/drill-01');
		await expect(page.getByText('Drill Level 1')).toBeVisible();

		// Go through drill-01 and return (autoDrillAll=false skips nested drill)
		await pressArrowRight(page); // Step 1 content
		await expect(page.getByText('First level drill content')).toBeVisible();
		await pressArrowRight(page); // Step 2 (Go to Level 2)
		await expect(page.getByText('Go to Level 2')).toBeVisible();
		await pressArrowRight(page); // Return from drill
		
		// Wait for URL and then for First Fragment to appear
		await expect(page).toHaveURL('/test-fixture');
		await expect(page.getByText('First Fragment')).toBeVisible();

		// Go back to fragment 0
		await pressArrowLeft(page);
		await expect(page.getByText('First Fragment')).not.toBeVisible();

		// Second drill cycle - should work the same
		await pressArrowRight(page); // Show First Fragment again
		await expect(page.getByText('First Fragment')).toBeVisible();
		
		await drillable.click(); // Click to drill again
		await expect(page).toHaveURL('/test-fixture/drill-01');
		await expect(page.getByText('Drill Level 1')).toBeVisible();
	});
});

test.describe('Multi-Level Drill Navigation (autoDrillAll enabled)', () => {
	// Use autoDrillAll=true to test full drill chain behavior
	test.beforeEach(async ({ page }) => {
		await resetFixture(page);
	});

	test('3-level nested drills all return to origin', async ({ page }) => {
		// Navigate to slide 2 (skip slide 1 drills)
		// We need to go through slide 1's drill to get to slide 2
		await pressArrowRight(page); // Step 1: First Fragment (pending drill set)
		await pressArrowRight(page); // Execute drill to drill-01
		await expect(page).toHaveURL('/test-fixture/drill-01');
		
		// Navigate through drill-01 (autoDrillAll will follow the chain)
		await pressArrowRight(page); // Step 1: First level content
		await pressArrowRight(page); // Step 2: Go to Level 2 (pending drill set)
		await pressArrowRight(page); // Execute drill to drill-02
		await expect(page).toHaveURL('/test-fixture/drill-02');
		
		// Navigate through drill-02
		await pressArrowRight(page); // Step 1: Second level content
		await pressArrowRight(page); // Step 2: Go to Level 3 (pending drill set)
		await pressArrowRight(page); // Execute drill to drill-03
		await expect(page).toHaveURL('/test-fixture/drill-03');
		
		// Navigate through drill-03 (deepest level)
		await pressArrowRight(page); // Step 1: Third level (deepest)
		await expect(page.getByText('Third level (deepest)')).toBeVisible();
		
		// Return from drill-03 - goes back to ORIGIN (test-fixture)
		await pressArrowRight(page);
		await expect(page).toHaveURL('/test-fixture');
		
		// Should be back on slide 1, First Fragment visible
		await expect(page.getByText('First Fragment')).toBeVisible();
	});

	test('complete 3-level drill from slide 2', async ({ page }) => {
		// First, navigate past slide 1 using autoDrillAll=false behavior
		// We'll use click to control the drill entry from slide 2
		
		// Actually, let's just navigate through to slide 2
		// Step through slide 1's drill first
		await pressArrowRight(page); // Step 1: First Fragment
		await pressArrowRight(page); // Execute drill to drill-01
		await expect(page).toHaveURL('/test-fixture/drill-01');
		
		// Go through the full 3-level chain from slide 1's drill
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2 (Go to Level 2)
		await pressArrowRight(page); // Execute drill-02
		await expect(page).toHaveURL('/test-fixture/drill-02');
		
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2 (Go to Level 3)
		await pressArrowRight(page); // Execute drill-03
		await expect(page).toHaveURL('/test-fixture/drill-03');
		
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Return to origin
		await expect(page).toHaveURL('/test-fixture');
		await expect(page.getByText('First Fragment')).toBeVisible();
		
		// Now continue to step 2 and slide 2
		await pressArrowRight(page); // Step 2: Second Fragment
		await expect(page.getByText('Second Fragment')).toBeVisible();
		
		await pressArrowRight(page); // Advance to slide 2
		await expect(page.getByText('Slide Two')).toBeVisible();
		
		// Step 1 of slide 2: Multi Drill Start
		await pressArrowRight(page);
		await expect(page.getByText('Multi Drill Start')).toBeVisible();
		
		// Execute drill chain from slide 2
		await pressArrowRight(page);
		await expect(page).toHaveURL('/test-fixture/drill-01');
		
		// Go through all 3 levels again
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // drill-02
		await expect(page).toHaveURL('/test-fixture/drill-02');
		
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Step 2
		await pressArrowRight(page); // drill-03
		await expect(page).toHaveURL('/test-fixture/drill-03');
		
		await pressArrowRight(page); // Step 1
		await pressArrowRight(page); // Return to origin (slide 2)
		await expect(page).toHaveURL('/test-fixture');
		
		// Should be back on slide 2, Multi Drill Start visible
		await expect(page.getByText('Multi Drill Start')).toBeVisible();
	});
});

test.describe('autoDrillAll Behavior', () => {
	test('with autoDrillAll disabled, arrow advances past drill without executing', async ({ page }) => {
		await resetFixture(page, { autoDrillAll: false });
		
		// Step 1: First Fragment (has drillTo)
		await pressArrowRight(page);
		await expect(page.getByText('First Fragment')).toBeVisible();
		
		// With autoDrillAll disabled, next arrow should go to step 2, not drill
		await pressArrowRight(page);
		await expect(page).toHaveURL('/test-fixture'); // Still on main page
		await expect(page.getByText('Second Fragment')).toBeVisible();
	});

	test('with autoDrillAll disabled, clicking fragment still drills', async ({ page }) => {
		await resetFixture(page, { autoDrillAll: false });
		
		// Show First Fragment
		await pressArrowRight(page);
		const drillable = page.getByText('First Fragment');
		await expect(drillable).toBeVisible();
		
		// Click directly on the drillable fragment
		await drillable.click();
		
		// Should drill despite autoDrillAll being false
		await expect(page).toHaveURL('/test-fixture/drill-01');
	});
});

test.describe('Standalone Drill Page Refresh Recovery', () => {
	test('refreshing a standalone drill page preserves return navigation', async ({ page }) => {
		// Navigate into a drill normally first
		await resetFixture(page);
		await pressArrowRight(page); // Step 1: First Fragment (pending drill set)
		await pressArrowRight(page); // Execute drill to drill-01
		await expect(page).toHaveURL('/test-fixture/drill-01');
		await expect(page.getByText('Drill Level 1')).toBeVisible();

		// Advance to step 1 inside drill-01
		await pressArrowRight(page);
		await expect(page.getByText('First level drill content')).toBeVisible();

		// Refresh the page while inside the standalone drill
		await page.reload();
		await page.waitForTimeout(500);
		await page.locator('body').focus();
		await page.locator('body').click();

		// After refresh, the drill state should be restored.
		// Navigate through remaining content and return to origin.
		await pressArrowRight(page); // Step 2: Go to Level 2
		await expect(page.getByText('Go to Level 2')).toBeVisible();

		// Next arrow should return to test-fixture (autoDrillAll-enabled would chain,
		// but the drillTo step was already past — return happens at end)
		await pressArrowRight(page); // Execute drill to drill-02 (autoDrillAll)
		await expect(page).toHaveURL('/test-fixture/drill-02');

		// Navigate through drill-02 chain
		await pressArrowRight(page); // step 1
		await pressArrowRight(page); // step 2 (Go to Level 3)
		await pressArrowRight(page); // Execute drill to drill-03
		await expect(page).toHaveURL('/test-fixture/drill-03');

		await pressArrowRight(page); // step 1
		await pressArrowRight(page); // Return to origin
		await expect(page).toHaveURL('/test-fixture');
		await expect(page.getByText('First Fragment')).toBeVisible();
	});

	test('refreshing standalone drill with seeded localStorage restores stack', async ({ page }) => {
		// Seed localStorage directly (like the birthrights refresh tests)
		await page.goto('/test-fixture/drill-01');
		await page.evaluate(() => {
			localStorage.clear();
			localStorage.setItem('mbs-drillto', 'true');

			const persistedState = {
				current: { presentation: 'test-fixture/drill-01', slide: 0, fragment: 0 },
				stack: [{ presentation: 'test-fixture', slide: 0, fragment: 1 }],
				slideFragments: [],
				slideFragmentCounts: [2],
				maxSlide: 0,
				returnHere: false
			};
			localStorage.setItem('mbs-nav-test-fixture', JSON.stringify(persistedState));
		});

		await page.reload();
		await page.waitForTimeout(500);
		await page.locator('body').focus();
		await page.locator('body').click();

		// Should be on drill-01 with restored stack
		await expect(page).toHaveURL('/test-fixture/drill-01');
		await expect(page.getByText('Drill Level 1')).toBeVisible();

		// Navigate through drill-01 content
		await pressArrowRight(page); // step 1
		await expect(page.getByText('First level drill content')).toBeVisible();
		await pressArrowRight(page); // step 2 (Go to Level 2)
		await expect(page.getByText('Go to Level 2')).toBeVisible();

		// End of drill-01 — should return to test-fixture origin
		await pressArrowRight(page); // autoDrill into drill-02
		await expect(page).toHaveURL('/test-fixture/drill-02');

		// Navigate the chain back to origin
		await pressArrowRight(page); // drill-02 step 1
		await pressArrowRight(page); // drill-02 step 2
		await pressArrowRight(page); // drill into drill-03
		await expect(page).toHaveURL('/test-fixture/drill-03');
		await pressArrowRight(page); // drill-03 step 1
		await pressArrowRight(page); // return to origin
		await expect(page).toHaveURL('/test-fixture');
	});
});
