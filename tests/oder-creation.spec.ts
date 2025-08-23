import {test, expect, Locator} from '@playwright/test';
import {faker} from "@faker-js/faker/locale/en";

test.beforeEach(async ({ page }) => {
    const path :any = require('path');
    const filePath :any = `file://${path.resolve('tests/order-creation.spec.ts')}`;
    const popupMessage: Locator = page.locator('#popup-message');
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();
    await page.goto(filePath);
})

test('button disabled initially', async ({ page }) => {
    await expect(page.getByTestId('submit-order')).toBeDisabled()
});

test('button enabled', async ({ page }) => {
    const randomUsername = faker.internet.username();
    const randomEmail = faker.internet.email();
    await page.getByTestId('username').fill(randomUsername)
    await page.getByTestId('email').fill(randomEmail)
    await expect(page.getByTestId('submit-order')).toBeEnabled()
});

test('OK popup appears', async ({ page }) => {
    await page.getByTestId('username').fill('random-name')
    await page.getByTestId('email').fill('hello@example.com')
    await page.getByTestId('submit-order').click()
    await expect(page.locator('#popup-message')).toBeVisible()
});