import {Page} from '@playwright/test';
export class InventoryPage{
    readonly page: Page;
    readonly backpackLink;
    readonly addToCartButton;
    readonly cartBadge;
    readonly cartLink;
    constructor (page: Page){
        this.page = page;
        this.backpackLink = page.getByText('Sauce Labs Backpack', {exact:true});
        this.addToCartButton = page.getByRole('button', {name:'Add to cart'});
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        
    }
    async selectBackpack(){
        await this.backpackLink.click();
    }
    async addProductToCart(){
        await this.addToCartButton.click();
    }
    async openCart(){
        await this.cartLink.click();

    }
}