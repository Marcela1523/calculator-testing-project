import { test, expect } from './fixtures';
import { calculatorButtonTests } from '../test-data/test-data'

test.beforeEach( async({ page }) => {
    await page.goto('/search?q=google+calculator');
});

test.describe('Press calculator buttons', () => {
    calculatorButtonTests.forEach((testData) => {
        test(`Click on ${testData.input} button should display it`, async ({ page, calculatorButtons, displaySection }) => {
            await calculatorButtons.clickOnCalculatorButton(testData.input);
            await displaySection.validateTextDisplay(testData.output);
        });
    }); 

    test(`Click on multiple number buttons should display them`, async ({ page, calculatorButtons, displaySection }) => {
        await calculatorButtons.enterNumber("2024");
        await displaySection.validateTextDisplay("2024");
    });

    test(`Click a number between parenthesis`, async ({ page, calculatorButtons, displaySection }) => {
        await calculatorButtons.enterNumber("(2024");
        await displaySection.validateTextDisplay("(2024)");
    });
});