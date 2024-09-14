import { expect, Locator, Page } from '@playwright/test';

export default class DisplaySection {
    readonly spanResult: Locator;
    readonly spanDisplay: Locator;
    readonly spanHistory: Locator;
    
    constructor(public readonly page: Page) {
        this.spanResult = page.getByTestId('ubtiRe');
        this.spanDisplay = page.getByTestId('VssY5c');
        this.spanHistory = page.getByTestId('ieUz0d');
    }

    async validateTextDisplay(output : string) {
        await expect(this.spanDisplay).toHaveText(output);
    }
}