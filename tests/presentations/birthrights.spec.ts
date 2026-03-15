import { test, expect, type Page } from '@playwright/test';
import { pressArrowRight } from '../utils/test-helpers';

/**
 * Birthrights - body-complete E2E Tests
 *
 * Tests the nested CustomShowProvider drill chain in birthrights/body-complete.
 * body-complete has 3 slides (Content1, Content2, Content3).
 * Content3 ("Formation of the Body") contains 5 drills with returnHere:
 *   step 3  → birthrights/genesis-2-7       (simple Slide, 1 step)
 *   step 12.1 → birthrights/body-initalized (CustomShowProvider, 2 slides ~10 steps)
 *   step 18 → birthrights/acts-10-24        (simple Slide, 1 step)
 *   step 18.2 → birthrights/acts-10-24      (duplicate target, same click)
 *   step 19.2 → birthrights/ephesians-2-11  (simple Slide, 0 steps - static only)
 *
 * These tests verify the fixes for:
 * - autoDrillAll in nested CustomShowProvider slides
 * - returnHere returning to parent custom show (not origin)
 * - No re-animation after drill return
 */

const BASE_URL = '/birthrights/body-complete';

async function resetBodyComplete(page: Page, options?: { autoDrillAll?: boolean }) {
	const autoDrillAll = options?.autoDrillAll ?? true;

	await page.goto(BASE_URL);

	await page.evaluate((opts) => {
		localStorage.clear();
		localStorage.setItem('mbs-drillto', opts.autoDrillAll ? 'true' : 'false');
	}, { autoDrillAll });

	await page.reload();
	await page.waitForTimeout(300);

	// Content1 static title should be visible
	await expect(page.getByText('Birth Process - macro')).toBeVisible({ timeout: 5000 });
	await expect(page.locator('.fragment').first()).toBeAttached({ timeout: 5000 });

	await page.locator('body').focus();
	await page.locator('body').click();
}

/**
 * Navigate from Content1 start to Content3 start.
 * Content1: 1 step, Content2: 1 step → 4 arrows to reach Content3 static state.
 */
async function navigateToContent3(page: Page) {
	await pressArrowRight(page); // Content1 step 1
	await pressArrowRight(page); // Content2 start (transition)
	await pressArrowRight(page); // Content2 step 1
	await pressArrowRight(page); // Content3 start (transition)

	await expect(page.getByText('Formation of the Body')).toBeVisible({ timeout: 5000 });
}

/**
 * Press ArrowRight repeatedly until URL contains the target string.
 * Uses pressArrowRight (200ms delay) for reliable timing during page navigations.
 */
async function advanceUntilUrl(page: Page, urlContains: string, maxPresses = 60) {
	for (let i = 0; i < maxPresses; i++) {
		await pressArrowRight(page);
		// Extra wait after each press to allow goto() to complete
		await page.waitForTimeout(100);
		if (page.url().includes(urlContains)) return;
	}
	throw new Error(`Timed out after ${maxPresses} presses waiting for URL containing "${urlContains}". Current: ${page.url()}`);
}

/**
 * Press ArrowRight repeatedly until URL contains target AND does NOT contain excluded string.
 * Used to navigate through a drill and return.
 */
async function advanceUntilUrlExcluding(page: Page, urlContains: string, urlExcludes: string, maxPresses = 60) {
	for (let i = 0; i < maxPresses; i++) {
		await pressArrowRight(page);
		await page.waitForTimeout(100);
		const url = page.url();
		if (url.includes(urlContains) && !url.includes(urlExcludes)) return;
	}
	throw new Error(`Timed out after ${maxPresses} presses waiting for URL containing "${urlContains}" without "${urlExcludes}". Current: ${page.url()}`);
}

async function advanceUntilPathname(page: Page, pathname: string, maxPresses = 60) {
	for (let i = 0; i < maxPresses; i++) {
		await pressArrowRight(page);
		await page.waitForTimeout(100);
		const url = new URL(page.url());
		if (url.pathname === pathname) return;
	}
	throw new Error(`Timed out after ${maxPresses} presses waiting for pathname "${pathname}". Current: ${page.url()}`);
}

test.describe('Birthrights body-complete - autoDrillAll', () => {
	test.beforeEach(async ({ page }) => {
		await resetBodyComplete(page);
	});

	test('drills into genesis-2-7 from Content3 and returns', async ({ page }) => {
		await navigateToContent3(page);

		// Navigate to step 3 which has drillTo genesis-2-7
		await pressArrowRight(page); // step 1 (column rect)
		await pressArrowRight(page); // step 2 ("1st Adam")
		await pressArrowRight(page); // step 3 ("Genesis 2:7" drill link visible, pending drill set)

		// Use drillable class to target the Fragment, not ScriptureBlock title
		await expect(page.locator('.drillable', { hasText: 'Genesis 2:7' })).toBeVisible();
		await expect(page).toHaveURL(BASE_URL);

		// Next arrow executes the pending drill
		await pressArrowRight(page);
		await expect(page).toHaveURL(/genesis-2-7/, { timeout: 5000 });

		// Navigate through genesis-2-7 and return
		await advanceUntilUrlExcluding(page, 'body-complete', 'genesis-2-7');

		// Should be back at body-complete Content3
		await expect(page).toHaveURL(/body-complete/);
		await expect(page.getByText('Formation of the Body')).toBeVisible({ timeout: 5000 });
	});

	test('full Content3 drill chain completes with autoDrillAll', async ({ page }) => {
		test.setTimeout(120000);
		await navigateToContent3(page);

		// --- Drill 1: genesis-2-7 ---
		await advanceUntilUrl(page, 'genesis-2-7');
		await expect(page).toHaveURL(/genesis-2-7/);

		// Navigate through genesis-2-7 and return
		await advanceUntilUrlExcluding(page, 'body-complete', 'genesis-2-7');
		await expect(page).toHaveURL(/body-complete/);

		// --- Drill 2: body-initalized (nested CustomShowProvider, ~10 steps) ---
		await advanceUntilUrl(page, 'body-initalized');
		await expect(page).toHaveURL(/body-initalized/);

		// Navigate through body-initalized and return
		await advanceUntilUrlExcluding(page, 'body-complete', 'body-initalized');
		await expect(page).toHaveURL(/body-complete/);

		// --- Drill 3: acts-10-24 ---
		await advanceUntilUrl(page, 'acts-10-24');
		await expect(page).toHaveURL(/acts-10-24/);

		// Navigate through acts-10-24 and return
		await advanceUntilUrlExcluding(page, 'body-complete', 'acts-10-24');
		await expect(page).toHaveURL(/body-complete/);

		// --- Drill 4: ephesians-2-11 ---
		await advanceUntilUrl(page, 'ephesians-2-11');
		await expect(page).toHaveURL(/ephesians-2-11/);

		// Navigate through ephesians-2-11 (static only, returns quickly) and return
		await advanceUntilUrlExcluding(page, 'body-complete', 'ephesians-2-11');
		await expect(page).toHaveURL(/body-complete/);

		// After all drills, continue through remaining steps
		// "Physical = Spiritual" appears at step 22 (near end of Content3)
		await expect(async () => {
			await page.keyboard.press('ArrowRight');
			await page.waitForTimeout(200);
			await expect(page.getByText('Physical = Spiritual')).toBeVisible();
		}).toPass({ timeout: 15000 });
	});
});

test.describe('Birthrights body-complete - manual drill', () => {
	test('manual click drills into genesis-2-7 from Content3', async ({ page }) => {
		await resetBodyComplete(page, { autoDrillAll: false });
		await navigateToContent3(page);

		// Navigate to step 3 where genesis-2-7 drill link appears
		await pressArrowRight(page); // step 1 (column rect)
		await pressArrowRight(page); // step 2 ("1st Adam")
		await pressArrowRight(page); // step 3 ("Genesis 2:7" drill link)

		// Click the drill link (use drillable class to avoid ScriptureBlock title match)
		const drillLink = page.locator('.drillable', { hasText: 'Genesis 2:7' });
		await expect(drillLink).toBeVisible();
		await drillLink.click();

		await expect(page).toHaveURL(/genesis-2-7/, { timeout: 5000 });

		// Navigate through genesis-2-7 and return
		await pressArrowRight(page); // step 1
		await pressArrowRight(page); // return

		await expect(page).toHaveURL(/body-complete/, { timeout: 5000 });
		await expect(page.getByText('Formation of the Body')).toBeVisible({ timeout: 5000 });
	});
});

test.describe('Birthrights body-complete - animation', () => {
	test('Content3 fragments do not re-animate after drill return', async ({ page }) => {
		await resetBodyComplete(page, { autoDrillAll: false });
		await navigateToContent3(page);

		// Navigate to step 3 where genesis-2-7 drill is
		await pressArrowRight(page); // step 1
		await pressArrowRight(page); // step 2 ("1st Adam")
		await pressArrowRight(page); // step 3 ("Genesis 2:7" drill link)

		const adamFragment = page.locator('.fragment', { hasText: '1st Adam' });
		await expect(adamFragment).toBeVisible();

		// Click the drill link (use drillable class)
		await page.locator('.drillable', { hasText: 'Genesis 2:7' }).click();
		await expect(page).toHaveURL(/genesis-2-7/, { timeout: 5000 });

		// Navigate through genesis-2-7 and return
		await pressArrowRight(page); // step 1
		await pressArrowRight(page); // return

		await expect(page).toHaveURL(/body-complete/, { timeout: 5000 });
		await expect(page.getByText('Formation of the Body')).toBeVisible({ timeout: 5000 });

		// Wait for animation state to settle
		await page.waitForTimeout(500);

		// "1st Adam" (step 2) should have 'revealed' class, NOT animate-fade
		await expect(adamFragment).toHaveClass(/revealed/);
		await expect(adamFragment).not.toHaveClass(/animate-fade/);
	});
});

test.describe('Birthrights body-complete - page refresh recovery', () => {
	test('returns to birthrights after refreshing mid-drill in body-complete', async ({ page }) => {
		// Seed localStorage to simulate being drilled into body-complete from birthrights
		// This mirrors what drillInto + persistState would create
		await page.goto(BASE_URL);
		await page.evaluate(() => {
			localStorage.clear();
			localStorage.setItem('mbs-drillto', 'true');

			// Simulate the persisted state: birthrights drilled into body-complete at fragment 0 (Content1 static state)
			const persistedState = {
				current: { presentation: 'birthrights/body-complete', slide: 0, fragment: 0 },
				stack: [{ presentation: 'birthrights', slide: 0, fragment: 39, slideFragments: [39, 0] }],
				slideFragments: [],
				slideFragmentCounts: [],
				maxSlide: 0,
				returnHere: true
			};
			localStorage.setItem('mbs-nav-birthrights', JSON.stringify(persistedState));
		});

		// Reload to simulate page refresh — CustomShowProvider should restore the stack
		await page.reload();
		await page.waitForTimeout(500);
		await expect(page.getByText('Birth Process - macro')).toBeVisible({ timeout: 5000 });
		await page.locator('body').focus();
		await page.locator('body').click();

		// Navigate to the end of body-complete — should return to /birthrights
		await advanceUntilPathname(page, '/birthrights', 120);
		await expect(page).toHaveURL('/birthrights');
	});

	test('returns to body-complete after refreshing in nested body-initalized', async ({ page }) => {
		// Seed localStorage to simulate: birthrights → body-complete → body-initalized
		await page.goto('/birthrights/body-initalized');
		await page.evaluate(() => {
			localStorage.clear();
			localStorage.setItem('mbs-drillto', 'true');

			const persistedState = {
				current: { presentation: 'birthrights/body-initalized', slide: 0, fragment: 1 },
				stack: [
					{ presentation: 'birthrights', slide: 0, fragment: 39, slideFragments: [39, 0] },
					{ presentation: 'birthrights/body-complete', slide: 0, fragment: 16, slideFragments: [] }
				],
				slideFragments: [],
				slideFragmentCounts: [],
				maxSlide: 0,
				returnHere: true
			};
			localStorage.setItem('mbs-nav-birthrights', JSON.stringify(persistedState));
		});

		// Reload to simulate page refresh
		await page.reload();
		await page.waitForTimeout(500);
		await page.locator('body').focus();
		await page.locator('body').click();

		// Navigate to end of body-initalized — with returnHere, should return to body-complete
		await advanceUntilUrlExcluding(page, 'body-complete', 'body-initalized', 40);
		await expect(page).toHaveURL(/body-complete/);
	});
});
