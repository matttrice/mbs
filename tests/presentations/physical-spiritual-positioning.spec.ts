import { test, expect, type Page, type Locator } from '@playwright/test';
import { resetAndWaitForPresentation, pressArrowRight } from '../utils/test-helpers';

async function goToStep(page: Page, step: number) {
	for (let i = 0; i < step; i += 1) {
		await pressArrowRight(page);
	}
}

async function openSlide2(page: Page) {
	await page.getByRole('button', { name: 'Go to slide 2' }).click();
	await expect(page.getByRole('button', { name: 'Go to slide 2' })).toHaveClass(/active/);
	await expect(page.getByText('Beginning')).not.toBeVisible();
	await page.locator('body').focus();
	await page.locator('body').click();
}

async function getBoxMetrics(locator: Locator) {
	return locator.first().evaluate((el) => {
		const style = getComputedStyle(el as HTMLElement);
		return {
			left: Number.parseFloat(style.left),
			top: Number.parseFloat(style.top),
			width: Number.parseFloat(style.width),
			height: Number.parseFloat(style.height)
		};
	});
}

function expectClose(actual: number, expected: number, label: string) {
	expect(Math.abs(actual - expected), `${label}: expected ${expected}, got ${actual}`).toBeLessThan(0.02);
}

async function expectFragmentGeometry(
	page: Page,
	text: string,
	expected: { left: number; top: number; width: number; height: number }
) {
	const activeSlide = page.locator('.slide-wrapper.active').first();
	const locator = activeSlide.locator('.fragment-positioned', { hasText: text });
	await expect(locator.first()).toBeVisible();
	const box = await getBoxMetrics(locator);

	expectClose(box.left, expected.left, `${text} left`);
	expectClose(box.top, expected.top, `${text} top`);
	expectClose(box.width, expected.width, `${text} width`);
	expectClose(box.height, expected.height, `${text} height`);
}

async function expectAnyFragmentGeometry(
	page: Page,
	text: string,
	expected: { left: number; top: number; width: number; height: number },
	label: string
) {
	const activeSlide = page.locator('.slide-wrapper.active').first();
	const locator = activeSlide.locator('.fragment-positioned', { hasText: text });
	const metrics = await locator.evaluateAll((els) =>
		els.map((el) => {
			const style = getComputedStyle(el as HTMLElement);
			return {
				left: Number.parseFloat(style.left),
				top: Number.parseFloat(style.top),
				width: Number.parseFloat(style.width),
				height: Number.parseFloat(style.height)
			};
		})
	);

	const found = metrics.some((m) =>
		Math.abs(m.left - expected.left) < 0.02 &&
		Math.abs(m.top - expected.top) < 0.02 &&
		Math.abs(m.width - expected.width) < 0.02 &&
		Math.abs(m.height - expected.height) < 0.02
	);

	expect(found, `${label} fragment not found at expected geometry`).toBe(true);
}

async function expectSvgRectGeometry(
	page: Page,
	expected: { left: number; top: number; width: number; height: number },
	label: string
) {
	const activeSlide = page.locator('.slide-wrapper.active').first();
	const rects = activeSlide.locator('svg.svg-rect');
	const metrics = await rects.evaluateAll((els) =>
		els.map((el) => {
			const style = getComputedStyle(el as SVGElement);
			return {
				left: Number.parseFloat(style.left),
				top: Number.parseFloat(style.top),
				width: Number.parseFloat(style.width),
				height: Number.parseFloat(style.height)
			};
		})
	);

	const found = metrics.some((m) =>
		Math.abs(m.left - expected.left) < 0.02 &&
		Math.abs(m.top - expected.top) < 0.02 &&
		Math.abs(m.width - expected.width) < 0.02 &&
		Math.abs(m.height - expected.height) < 0.02
	);

	expect(found, `${label} rectangle not found at expected geometry`).toBe(true);
}

test.describe('Physical-Spiritual positioning regression guard', () => {
	test('maintains critical text and column positions on Slide 1', async ({ page }) => {
		await resetAndWaitForPresentation(page, {
			route: '/physical-spiritual',
			autoDrillAll: false,
			readyText: 'Genesis 1:1',
			notVisibleText: 'Visible'
		});

		// Step 4: verify early right-side annotation placement.
		await goToStep(page, 4);
		await expectFragmentGeometry(page, 'All things…', {
			left: 786.1,
			top: 38.5,
			width: 137.8,
			height: 25.4
		});

		// Step 11: verify left-column title alignment stack around Invisible/Unseen/Eternal.
		await goToStep(page, 7);
		await expectFragmentGeometry(page, 'Invisible', {
			left: 240,
			top: 55,
			width: 210,
			height: 36.1
		});
		await expectFragmentGeometry(page, 'Unseen', {
			left: 264.45,
			top: 93.6,
			width: 161.1,
			height: 35.9
		});
		await expectFragmentGeometry(page, 'Eternal', {
			left: 265.35,
			top: 131.4,
			width: 159.3,
			height: 38.6
		});

		// Step 30: verify known drift-sensitive elements.
		await goToStep(page, 19);
		await expectFragmentGeometry(page, 'Einstein', {
			left: 429.05,
			top: 308,
			width: 101.9,
			height: 30
		});
		await expectFragmentGeometry(page, '=', {
			left: 423.45,
			top: 297,
			width: 113.1,
			height: 47
		});

		// Verify wide background columns from step 3 remain anchored.
		await expectSvgRectGeometry(page, { left: 210, top: 0, width: 270, height: 540 }, 'Left column');
		await expectSvgRectGeometry(page, { left: 480, top: 0, width: 270, height: 540 }, 'Right column');

		// Verify step 22 inner card placement that previously drifted.
		await expectSvgRectGeometry(page, { left: 250, top: 178, width: 230, height: 118.9 }, 'Step 22 inner card');
	});

	test('maintains Slide 2 keyframe swap and arc progression geometry', async ({ page }) => {
		await resetAndWaitForPresentation(page, {
			route: '/physical-spiritual',
			autoDrillAll: false,
			readyText: 'Genesis 1:1'
		});

		await openSlide2(page);

		// Step 2 baseline before swap keyframe executes.
		await goToStep(page, 2);
		await expectFragmentGeometry(page, 'SPIRITUAL', {
			left: 229.7,
			top: 7,
			width: 230.6,
			height: 52.4
		});
		await expectFragmentGeometry(page, 'PHYSICAL', {
			left: 495.75,
			top: 7,
			width: 238.5,
			height: 52.4
		});
		await expectAnyFragmentGeometry(page, '=', {
			left: 432.1,
			top: 13.4,
			width: 95.8,
			height: 47.9
		}, 'Slide 2 top equals');

		// Arc progression: none at step 2, first arc at step 3, all 3 arcs at step 4.
		await expect(page.locator('.svg-arc-container')).toHaveCount(0);
		await goToStep(page, 1);
		await expect(page.locator('.svg-arc-container')).toHaveCount(1);
		await goToStep(page, 1);
		await expect(page.locator('.svg-arc-container')).toHaveCount(3);

		// Step 5 keyframe swap completes after transition.
		await goToStep(page, 1);
		await page.waitForTimeout(900);
		await expectFragmentGeometry(page, 'SPIRITUAL', {
			left: 495.75,
			top: 7,
			width: 230.6,
			height: 52.4
		});
		await expectFragmentGeometry(page, 'PHYSICAL', {
			left: 229.7,
			top: 7,
			width: 238.5,
			height: 52.4
		});

		// Step 8 row geometry (copy/substance relationship) remains stable.
		await goToStep(page, 3);
		await expectFragmentGeometry(page, 'Copy/Shadow', {
			left: 235,
			top: 126.8,
			width: 220,
			height: 47.9
		});
		await expectFragmentGeometry(page, 'True/Substance', {
			left: 490,
			top: 126.8,
			width: 250,
			height: 47.9
		});

		// Step 12+ anchors around central covenant relationship text.
		await goToStep(page, 4);
		await expectFragmentGeometry(page, 'Hebrews 9:22-24', {
			left: 14.6,
			top: 133.8,
			width: 205.6,
			height: 34.3
		});
		await expectFragmentGeometry(page, 'ISRAEL', {
			left: 264.6,
			top: 199.8,
			width: 160.8,
			height: 55.4
		});
		await expectFragmentGeometry(page, 'CHURCH', {
			left: 521.35,
			top: 203.6,
			width: 187.3,
			height: 55.4
		});
		await expectFragmentGeometry(page, 'Old Testament = New Testament', {
			left: 192.5,
			top: 267.7,
			width: 588.4,
			height: 44.4
		});

		// Step 17 right-side labels remain anchored.
		await goToStep(page, 5);
		await expectFragmentGeometry(page, 'Glory #3', {
			left: 789.7,
			top: 128.6,
			width: 130.6,
			height: 29.2
		});
		await expectFragmentGeometry(page, 'HEAVEN', {
			left: 766.1,
			top: 150,
			width: 177.8,
			height: 55.4
		});

		// Swapped background columns stay anchored to the same geometry.
		await expectSvgRectGeometry(page, { left: 210, top: 0, width: 270, height: 540 }, 'Slide 2 left column');
		await expectSvgRectGeometry(page, { left: 480, top: 0, width: 270, height: 540 }, 'Slide 2 right column');
	});
});
