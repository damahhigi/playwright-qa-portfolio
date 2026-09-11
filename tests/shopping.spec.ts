import {expect} from '@playwright/test';
import {test} from '../fixtures/pageFixtures';
import {users} from '../test-data/users';
import {checkoutData} from '../test-data/checkoutData';

test.describe('Shopping tests', () => {
    // successful purchase test
    test ('@smoke @regression user can complete a purchase successfully' , async ({
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
});

test.describe('Checkout validation tests', () => {
    // missing first name
    // missing last name
    // missing postal code
    test('@regression checkout shows error when first name is missing', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {
    await page.goto('/');

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCheckoutInformation(
        checkoutData.missingFirstName.firstName,
        checkoutData.missingFirstName.lastName,
        checkoutData.missingFirstName.postalCode
    );

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: First Name is required'
    );
});
test('@regression checkout shows error when last name is missing', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {
    await page.goto('/');

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCheckoutInformation(
        checkoutData.missingLastName.firstName,
        checkoutData.missingLastName.lastName,
        checkoutData.missingLastName.postalCode
    );

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Last Name is required'
    );
});
test('@regression checkout shows error when postal code is missing', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {
    await page.goto('/');

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await inventoryPage.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCheckoutInformation(
        checkoutData.missingPostalCode.firstName,
        checkoutData.missingPostalCode.lastName,
        checkoutData.missingPostalCode.postalCode
    );

    await expect(checkoutPage.errorMessage).toHaveText(
        'Error: Postal Code is required'
    );
});
test('@regression user can remove backpack from cart', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage
}) => {
    await page.goto('/');

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventoryPage.selectBackpack();
    await inventoryPage.addProductToCart();
    await inventoryPage.openCart();

    await expect(cartPage.backpackName).toBeVisible();

    await cartPage.removeBackpack();

    await expect(cartPage.backpackName).not.toBeVisible();
});
});
