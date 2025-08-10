import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.only('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  //Check Github icon is visible
  await expect(page.getByRole('link', {name: 'GitHub repository'})).toBeVisible();

  //Check footer is visible
  await  expect(page.getByRole('contentinfo')).toBeVisible();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
