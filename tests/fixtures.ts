import { test as baseTest } from "@playwright/test";
import CalculatorButtons from "../pom/calculator-buttons";
import DisplaySection from "../pom/display-section";

type pages = {
    calculatorButtons: CalculatorButtons,
    displaySection: DisplaySection
}

const testSections = baseTest.extend<pages>({
    calculatorButtons: async({ page }, use) => {
        await use(new CalculatorButtons(page));
    },
    displaySection: async({ page }, use) => {
        await use(new DisplaySection(page));
    }
});

export const test = testSections;
export const expect = testSections.expect;
