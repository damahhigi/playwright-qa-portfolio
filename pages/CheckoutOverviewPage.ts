import { Page } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly backpackName;
    readonly backpackPrice;
    readonly finishButton;
    readonly successMessage;

    constructor(page: Page) {
        this.page = page;
        this.backpackName = page.getByText('Sauce Labs Backpack', {exact:true});
        this.backpackPrice = page.getByText('$29.99', {exact:true});
        this.finishButton = page.getByRole('button', {name:'Finish'});
        this.successMessage = page.getByText('Thank you for your order!', {exact:true});
    }
    async finishOrder() {
    await this.finishButton.click();
}
}
