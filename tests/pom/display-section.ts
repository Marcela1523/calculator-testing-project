import { expect, Locator, Page } from '@playwright/test';

export class DisplaySection {
    readonly spanResult: Locator;
    readonly spanDisplay: Locator;
    readonly spanHistory: Locator;
    
    constructor(public readonly page: Page) {
        this.spanResult = page.getByTestId('ubtiRe');
        this.spanDisplay = page.getByTestId('VssY5c');
        this.spanHistory = page.getByTestId('ieUz0d');
    }

    async validateExactTextDisplay(output : string) {
        await expect(this.spanDisplay).toHaveText(output);
    }

    async typeUsingKeybord(input : string) {
        await this.spanDisplay.click();
        const lastChar = input.length -1;
        for(let i = 0; i<lastChar; i++) {
            await this.spanDisplay.press(input[i]);
        }
        await this.spanDisplay.press('Enter');
    }
}