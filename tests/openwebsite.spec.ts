import { test, expect } from '@playwright/test';

test('Open Radiant Technologies website', async ({ page }) => {
  await page.goto('https://radianttech.co.in/');

  await expect(page).toHaveURL(/radianttech\.co\.in/);

  console.log('Website Title:', await page.title());
//this is for testing the title of the website
  await expect(page).toHaveTitle(/Radiant/i);
//adding comment for pushing in the branch
//adding second line
  await page.waitForTimeout(5000);
});