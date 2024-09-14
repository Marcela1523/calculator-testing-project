import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on Google calculator page', async ({ page }) => {
    await page.goto('/search?q=google+calculator');
});

When('I enter {string} value in the the calculator', async ({calculatorButtons}, entry: string) => {
    await calculatorButtons.enterNumber(entry);
});

When('I perform {string} operation in the calculator', async ({calculatorButtons}, entry: string) => {
    await calculatorButtons.enterNumber(entry);
});

When('I perform {string} operation using the keyboard', async ({displaySection}, entry: string) => {
    await displaySection.typeUsingKeybord(entry);
});

When('I remove {int} digit', async ({calculatorButtons}, times: number) => {
    await calculatorButtons.erase(times);
});

When('I remove all digits', async ({calculatorButtons}) => {
    await calculatorButtons.eraseAll();
});

Then('I can see {string} text in the calculator screen', async ({displaySection}, result: string) => {
    await displaySection.validateExactTextDisplay(result);
});