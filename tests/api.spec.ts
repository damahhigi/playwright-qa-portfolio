import { expect } from '@playwright/test';
import { test } from '../fixtures/apiFixtures';
import { apiData } from '../test-data/apiData';
import { UsersApi } from '../api/UsersApi';

test('GET request returns successful response', async ({ usersApi }) => {
    const response = await usersApi.getUsers();

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveLength(10);
    expect(responseBody[0].id).toBe(1);
    expect(responseBody[0].name).toBe('Leanne Graham');
    expect(responseBody[0].username).toBe('Bret');
    expect(responseBody[0].email).toBe('Sincere@april.biz');

});

test('GET single user returns correct user', async ({ usersApi }) => {
    const response = await usersApi.getUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(2);
    expect(responseBody.name).toBe('Ervin Howell');
    expect(responseBody.username).toBe('Antonette');
    expect(responseBody.email).toBe('Shanna@melissa.tv');
});
test('GET non-existent user returns 404', async ({ usersApi }) => {
    const response = await usersApi.getUser(9999);

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
});

test('POST creates a new user', async ({ usersApi }) => {
    const response = await usersApi.createUser(apiData.newUser);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe(apiData.newUser.name);
    expect(responseBody.job).toBe(apiData.newUser.job);
    expect(responseBody.id).toBe(11);
});

test('PUT updates an existing user', async ({ usersApi }) => {
    const response = await usersApi.updateUser(
        2,
        apiData.updatedUser
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(apiData.updatedUser.id);
    expect(responseBody.name).toBe(apiData.updatedUser.name);
    expect(responseBody.username).toBe(apiData.updatedUser.username);
    expect(responseBody.email).toBe(apiData.updatedUser.email);
});

test('PATCH partially updates an existing user', async ({ usersApi }) => {
    const response = await usersApi.partiallyUpdateUser(
        2,
        apiData.partialUpdate
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(2);
    expect(responseBody.email).toBe(apiData.partialUpdate.email);
});

test('DELETE removes an existing user', async ({ usersApi }) => {
    const response = await usersApi.deleteUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
});
test('GET user with ID zero returns 404', async ({ usersApi }) => {
    const response = await usersApi.getUser(0);

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
});