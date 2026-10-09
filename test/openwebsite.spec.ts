
import { test, expect } from '@playwright/test';

test('Open Radiant Technologies website', async ({ page }) => {

  // Open the website
  await page.goto('https://radianttech.co.in/');

  // Verify that the website is opened
  await expect(page).toHaveURL('https://radianttech.co.in/');

  // Print the page title
  console.log('Website Title:', await page.title('QA & Software Testing Services in Gurgaon & Delhi | Radiant Technologies'));

  // Verify the page title contains Radiant
  await expect(page).toHaveTitle(/Radiant/i);

  // Keep the browser open until the test finishes
  await page.waitForTimeout(5000);

});