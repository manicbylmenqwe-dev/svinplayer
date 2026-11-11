const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

for (const width of [320, 360, 375, 600, 768, 1280]) {
  test(`header navigation fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pathToFileURL(path.join(__dirname, '..', 'index.html')).href);

    for (const link of await page.locator('header a').all()) {
      const box = await link.boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(width);
    }
  });
}
