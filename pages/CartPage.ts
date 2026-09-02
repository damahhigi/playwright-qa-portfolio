import{Page} from '@playwright/test';
export class CartPage{
    readonly page: Page;
    readonly backpackName;
    readonly backpackPrice;
    readonly checkoutButton;
    constructor(page:Page){
        this.page =page;
        this.backpackName = page.getByText('Sauce Labs Backpack', {exact:true});
        this.backpackPrice = page.getByText('$29.99',{exact:true});
        this.checkoutButton = page.getByRole('button',{name:'Checkout'});

    }
    async checkout(){
        await this.checkoutButton.click();
    }
}