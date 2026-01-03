import { expect, type Page } from '@playwright/test';

/**
 * Shared test utilities for Playwright E2E tests
 */

export interface ResetOptions {
	/** Route to navigate to (default: '/test-fixture') */
	route?: string;
	/** Whether autoDrillAll is enabled (default: true) */
	autoDrillAll?: boolean;
	/** Text that should be visible when presentation is ready */
	readyText?: string;
	/** Text that should NOT be visible at start (to verify fragment 0) */
	notVisibleText?: string;
}

/**
 * Reset navigation state and wait for a presentation to be ready.
 * Clears localStorage and performs a hard reload to ensure fresh state.
 */
export async function resetAndWaitForPresentation(page: Page, options: ResetOptions = {}) {
	const {
		route = '/test-fixture',
		autoDrillAll = true,
		readyText,
		notVisibleText
	} = options;

	// Go to presentation first (need origin for localStorage access)
	await page.goto(route);

	// Clear localStorage and set options
	await page.evaluate((opts) => {
		localStorage.clear();
		if (opts.autoDrillAll === false) {
			localStorage.setItem('mbs-drillto', 'false');
		}
	}, { autoDrillAll });

	// Hard reload to get fresh state (clears any in-memory navigation state)
	await page.reload();

	// Wait for indicator to be active (indicates init() ran)
	await expect(page.locator('.indicator-dot.active')).toBeVisible({ timeout: 5000 });

	// Wait for ready text if specified
	if (readyText) {
		await expect(page.getByText(readyText)).toBeVisible({ timeout: 10000 });
	}

	// Wait for the first fragment to be present (even if not visible)
	await expect(page.locator('.fragment').first()).toBeAttached({ timeout: 5000 });

	// Verify we're starting at fragment 0 if notVisibleText specified
	if (notVisibleText) {
		await expect(page.getByText(notVisibleText)).not.toBeVisible();
	}

	// Focus the page to ensure keyboard events work
	await page.locator('body').focus();
	await page.locator('body').click();
}

/**
 * Press ArrowRight key and wait for state update
 */
export async function pressArrowRight(page: Page) {
	await page.keyboard.press('ArrowRight');
	// Small wait for navigation state update
	await page.waitForTimeout(100);
}

/**
 * Press ArrowLeft key and wait for state update
 */
export async function pressArrowLeft(page: Page) {
	await page.keyboard.press('ArrowLeft');
	// Small wait for navigation state update
	await page.waitForTimeout(100);
}

/**
 * Navigate forward until URL matches expected pattern
 */
export async function navigateUntilUrl(
	page: Page,
	urlContains: string,
	urlNotContains?: string,
	timeout = 10000
) {
	await expect(async () => {
		await page.keyboard.press('ArrowRight');
		const url = page.url();
		expect(url).toContain(urlContains);
		if (urlNotContains) {
			expect(url).not.toContain(urlNotContains);
		}
	}).toPass({ timeout });
}

/**
 * Navigate forward until we return from current drill
 */
export async function navigateThroughDrillAndReturn(
	page: Page,
	baseRoute: string,
	drillRoute: string,
	timeout = 10000
) {
	await navigateUntilUrl(page, baseRoute, drillRoute, timeout);
}
