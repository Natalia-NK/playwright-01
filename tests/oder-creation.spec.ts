import { test, expect } from '@playwright/test';
const popupMessage: Locator = page.locator('#popup-message');

test.beforeEach(async ({ page }) => {
    const path :any = require('path');
    const filePath :any = `file://${path.resolve('tests/order-creation.spec.ts')}`;
    await page.goto(filePath);
})

test('button disabled initially', async ({ page }) => {
    await expect(page.getByTestId('submit-order')).toBeDisabled()
});

test('button enabled', async ({ page }) => {
    await page.getByTestId('username').fill('random-name')
    await page.getByTestId('email').fill('hello@example.com')
    await expect(page.getByTestId('submit-order')).toBeEnabled()
});

test('OK popup appears', async ({ page }) => {
    await page.getByTestId('username').fill('random-name')
    await page.getByTestId('email').fill('hello@example.com')
    await page.getByTestId('submit-order').click()
    await expect(page.locator('#popup-message')).toBeVisible()
});