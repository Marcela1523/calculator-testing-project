import { Locator, Page } from "@playwright/test";

export class CalculatorButtons {
    readonly page: Page;
    private btn0: Locator;
    private btn1: Locator;
    private btn2: Locator;
    private btn3: Locator;
    private btn4: Locator;
    private btn5: Locator;
    private btn6: Locator;
    private btn7: Locator;
    private btn8: Locator;
    private btn9: Locator;
    private btnErase: Locator;
    private btnOpenParenthesis: Locator;
    private btnCloseParenthesis: Locator;
    private btnDecimalPoint: Locator;
    private btnAddition: Locator;
    private btnSubstraction: Locator;
    private btnDivision: Locator;
    private btnMultiplication: Locator;
    private btnEqual: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btn0 = page.getByTestId('bkEvMb');
        this.btn1 = page.getByTestId('N10B9');
        this.btn2 = page.getByTestId('lVjWed');
        this.btn3 = page.getByTestId('KN1kY');
        this.btn4 = page.getByTestId('xAP7E');
        this.btn5 = page.getByTestId('Ax5wH');
        this.btn6 = page.getByTestId('abcgof');
        this.btn7 = page.getByTestId('rk7bOd');
        this.btn8 = page.getByTestId('T7PMFe');
        this.btn9 = page.getByTestId('XoxYJ');
        this.btnEqual = page.getByTestId('Pt8tGc');
        this.btnErase = page.getByTestId('H7sWPd');
        this.btnOpenParenthesis = page.getByTestId('j93WEe');
        this.btnCloseParenthesis = page.getByTestId('qCp9A');
        this.btnDecimalPoint = page.getByTestId('YrdHyf');
        this.btnAddition = page.getByTestId('XSr6wc');
        this.btnDivision = page.getByTestId('WxTTNd');
        this.btnSubstraction = page.getByTestId('pPHzQc');
        this.btnMultiplication = page.getByTestId('YovRWb');
    }

    async clickOnCalculatorButton(btn: string) {
        switch(btn) {
            case "+" : 
                await this.btnAddition.click();
                break;
            case "-" : 
                await this.btnSubstraction.click();
                break;
            case "/" : 
                await this.btnDivision.click();
                break;
            case "x" : 
                await this.btnMultiplication.click();
                break;
            case "." : 
                await this.btnDecimalPoint.click();
                break;
            case "=" : 
                await this.btnEqual.click();
                break;
            case "(" : 
                await this.btnOpenParenthesis.click();
                break;
            case ")" : 
                await this.btnCloseParenthesis.click();
                break;
            default:
                await this[`btn${btn}`].click();
                break;
        }
    }

    async enterNumber(input: string) {
        for(let i = 0; i < input.length; i++) {
            await this.clickOnCalculatorButton(input[i]);
        }
    }

    async erase(times: number){
        for(let i = 0; i<times; i++){
            await this.btnErase.click();
        }
    }

    async eraseAll(){
        await this.btnErase.click({delay: 1000});
    }
}