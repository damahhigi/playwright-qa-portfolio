import{test,expect} from '@playwright/test';
test.describe('Login tests',()=>{
    test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});
test('user can open the practice site', async ({ page }) => {

    await expect(page.getByRole('button',{name: 'Login'})).toBeVisible();

    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Products', {exact: true})).toBeVisible();

});

test('user cannot login with invalid password', async ({page}) => {
    await expect(page.getByRole('button', {name:'Login'})).toBeVisible();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button' , {name: 'Login'}).click();
    await expect(
  page.getByText('Epic sadface: Username and password do not match any user in this service')
).toBeVisible();


});

test('user cannot login with empty password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();



});

test('user cannot login with empty username', async ({ page }) => {
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});

});
