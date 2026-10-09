
import { test, expect } from '@playwright/test';

test('Automate page navigation', async ({ page }) => {

  // Step 1: Open the home page
  await page.goto('https://the-internet.herokuapp.com/');

  // Step 2: Verify the home page
  await expect(page).toHaveTitle('The Internet');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();

  // Step 3: Click on A/B Testing link
  await page.getByRole('link', { name: 'A/B Testing' }).click();

  // Step 4: Verify navigation to A/B Testing page
    await expect(page).toHaveURL(/abtest/);
    const heading = page.locator('h3');
    await expect(heading).toHaveText(/A\/B Test (Control|Variation 1)/);    
  // Step 4: Verify navigation to A/B Testing page
  //await expect(page).toHaveURL(/abtest/);
  //await expect(page.getByRole('heading', { name: 'A/B Test Variation 1',level: 3 } )).toBeVisible();
   // await expect( page.getByRole('heading', { name: 'A/B Test Variation 1' })).toBeVisible();
   //await expect(page.getByRole('heading', { name: /A\/B Test Variation 1/i })).toBeVisible();
  await expect(page).toHaveURL(/abtest/);

    await expect(page.locator('h3')).toHaveText(/A\/B Test (Control|Variation 1)/);
  
   // Step 5: Navigate back to the home page

  await page.goBack();

  // Step 6: Verify home page URL
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  // Step 7: Navigate forward
  await page.goForward();

  // Step 8: Verify A/B Testing page again
  await expect(page).toHaveURL(/abtest/);

  // Step 9: Reload the current page
  await page.reload();

  // Step 10: Verify the page after reload
  await expect(page.getByRole('heading', { name: 'A/B Test Variation 1' })).toBeVisible();
  //this is for the testing purpose on git
  //this is for push from local to git by command

});