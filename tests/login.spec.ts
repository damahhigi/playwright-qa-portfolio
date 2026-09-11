import{expect} from '@playwright/test';
import{test } from '../fixtures/pageFixtures';
import {users} from'../test-data/users';
test.describe('Login tests',()=>{
    test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
test('@smoke user can open the practice site', async ({ page, loginPage }) => {

    await expect(page.getByRole('button',{name: 'Login'})).toBeVisible();

    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(page.getByText('Products', {exact: true})).toBeVisible();

});

test('@regression user cannot login with invalid password', async ({page, loginPage}) => {
    await expect(page.getByRole('button', {name:'Login'})).toBeVisible();
    await loginPage.login(users.invalidPasswordUser.username, users.invalidPasswordUser.password);
    await expect(
  page.getByText('Epic sadface: Username and password do not match any user in this service')
).toBeVisible();


});

test('@regression user cannot login with empty password', async ({ page, loginPage}) => {
    await loginPage.login('standard_user', '');
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();



});

test('@regression user cannot login with empty username', async ({ page, loginPage }) => {
    await loginPage.login('', 'secret_sauce');
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});

});
