import { test, expect } from '@playwright/test';

test('Open Radiant Technologies website', async ({ page }) => {
  await page.goto('https://radianttech.co.in/');

  await expect(page).toHaveURL(/radianttech\.co\.in/);

  console.log('Website Title:', await page.title());

  await expect(page).toHaveTitle(/Radiant/i);

  await page.waitForTimeout(5000);
});