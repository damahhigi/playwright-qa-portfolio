import {test, expect} from '@playwright/test';

test ('user can complete a purchase successfully' , async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();
    await page.getByText('Sauce Labs Backpack', {exact:true}).click();
    await page.getByRole('button', {name:'Add to cart'}).click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByText('Sauce Labs Backpack', {exact:true})).toBeVisible();
    await expect(page.getByText('$29.99', {exact:true})).toBeVisible();
    await page.getByRole('button', {name:'Checkout'}).click();
    await page.getByPlaceholder('First Name').fill('Damaris');
    await page.getByPlaceholder('Last Name').fill('Higi');
    await page.getByPlaceholder('Zip/Postal Code').fill('0100');
    await page.getByRole('button', {name:'Continue'}).click();
    await expect(page.getByText('Sauce Labs Backpack', {exact:true})).toBeVisible();
    await expect(page.getByText('$29.99',{exact:true})).toBeVisible();
    await page.getByRole('button', {name:'Finish'}).click();
    await expect(page.getByText('Thank you for your order!', {exact:true})).toBeVisible();




});