import{test,expect} from '@playwright/test';
import{LoginPage } from '../pages/LoginPage';
import {users} from'../test-data/users';
test.describe('Login tests',()=>{
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});
test('user can open the practice site', async ({ page }) => {

    await expect(page.getByRole('button',{name: 'Login'})).toBeVisible();

    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(page.getByText('Products', {exact: true})).toBeVisible();

});

test('user cannot login with invalid password', async ({page}) => {
    await expect(page.getByRole('button', {name:'Login'})).toBeVisible();
    await loginPage.login(users.invalidPasswordUser.username, users.invalidPasswordUser.password);
    await expect(
  page.getByText('Epic sadface: Username and password do not match any user in this service')
).toBeVisible();


});

test('user cannot login with empty password', async ({ page }) => {
    await loginPage.login('standard_user', '');
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();



});

test('user cannot login with empty username', async ({ page }) => {
    await loginPage.login('', 'secret_sauce');
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});

});
