import {expect} from '@playwright/test';
import {test} from '../fixtures/pageFixtures';
import {users} from '../test-data/users';
import {checkoutData} from '../test-data/checkoutData';

test ('user can complete a purchase successfully' , async ({
    page,
    loginPage, 
    inventoryPage,
    cartPage,
    checkoutPage,
    checkoutOverviewPage
}) => {
    

    await page.goto('/');
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openCart();
    await expect(cartPage.backpackName).toBeVisible();
    await expect(cartPage.backpackPrice).toBeVisible();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutInformation(checkoutData.validCustomer.firstName, checkoutData.validCustomer.lastName,checkoutData.validCustomer.postalCode);
    await expect(checkoutOverviewPage.backpackName).toBeVisible();
    await expect(checkoutOverviewPage.backpackPrice).toBeVisible();
    await checkoutOverviewPage.finishOrder();
    await expect(checkoutOverviewPage.successMessage).toBeVisible();




});