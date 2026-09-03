import{ test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import{CartPage} from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
};
export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
    },
    cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);  
    },

    checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
    },

    checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await use(checkoutOverviewPage);
    },
});