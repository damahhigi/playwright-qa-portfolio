import {test, expect} from '@playwright/test';

test('GET request returns successful response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveLength(10);
    expect(responseBody[0].id).toBe(1);
    expect(responseBody[0].name).toBe('Leanne Graham');
    expect(responseBody[0].username).toBe('Bret');
    expect(responseBody[0].email).toBe('Sincere@april.biz');

});

test('GET single user returns correct user', async ({ request }) => {
    const response = await request.get(
     'https://jsonplaceholder.typicode.com/users/2'
);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(2);
    expect(responseBody.name).toBe('Ervin Howell');
    expect(responseBody.username).toBe('Antonette');
    expect(responseBody.email).toBe('Shanna@melissa.tv');
    
});

test('GET non-existent user returns 404', async ({ request }) => {
    const response = await request.get(
     'https://jsonplaceholder.typicode.com/users/9999'
);

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody).toEqual({});
});

test('POST creates a new user', async ({ request }) => {
    const newUser = {
    name: 'Damaris',
    job: 'QA Engineer'
};
    const response = await request.post(
     'https://jsonplaceholder.typicode.com/users',
    {
        data: newUser
    }
);

    const responseBody = await response.json();

    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe(newUser.name);
    expect(responseBody.job).toBe(newUser.job);
    expect(responseBody.id).toBe(11);

});

test('PUT updates an existing user', async ({ request }) => {
    const updatedUser = {
    id: 2,
    name: 'Damaris Higi',
    username: 'Damaris',
    email: 'damaris@example.com'
};
    const response = await request.put(
     'https://jsonplaceholder.typicode.com/users/2',
    {
        data: updatedUser
    }
);

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.id).toBe(updatedUser.id);
    expect(responseBody.name).toBe(updatedUser.name);
    expect(responseBody.username).toBe(updatedUser.username);
    expect(responseBody.email).toBe(updatedUser.email);
});

test('PATCH partially updates an existing user', async ({ request }) => {
    const partialUpdate = {
    email: 'newemail@example.com'
};
    const response = await request.patch(
     'https://jsonplaceholder.typicode.com/users/2',
    {
        data: partialUpdate
    }
);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(2);
    expect(responseBody.email).toBe(partialUpdate.email);

});

test('DELETE removes an existing user', async ({ request }) => {

    const response = await request.delete(
     'https://jsonplaceholder.typicode.com/users/2',
);

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toEqual({});

});