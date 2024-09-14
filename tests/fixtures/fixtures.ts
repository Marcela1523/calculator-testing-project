import { test as baseTest } from "playwright-bdd";
import { CalculatorButtons } from "../pom/calculator-buttons";
import { DisplaySection } from "../pom/display-section";

//Extending the playwright-bdd test clase to include the page object models and share them in the step definitions
export const test = baseTest.extend({
    calculatorButtons: async({ page }, use) => {
        await use(new CalculatorButtons(page));
    },
    displaySection: async({ page }, use) => {
        await use(new DisplaySection(page));
    }
});