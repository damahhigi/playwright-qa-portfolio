import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';
import {checkoutData} from '../test-data/checkoutData';

test ('user can complete a purchase successfully' , async ({page}) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutoverviewPage = new CheckoutOverviewPage(page);
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openCart();
    await expect(cartPage.backpackName).toBeVisible();
    await expect(cartPage.backpackPrice).toBeVisible();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutInformation(checkoutData.validCustomer.firstName, checkoutData.validCustomer.lastName,checkoutData.validCustomer.postalCode);
    await expect(checkoutoverviewPage.backpackName).toBeVisible();
    await expect(checkoutoverviewPage.backpackPrice).toBeVisible();
    await checkoutoverviewPage.finishOrder();
    await expect(checkoutoverviewPage.successMessage).toBeVisible();




});