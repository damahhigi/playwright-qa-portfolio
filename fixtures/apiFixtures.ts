import { test as base } from '@playwright/test';
import { UsersApi } from '../api/UsersApi';

type ApiFixtures = {
    usersApi: UsersApi;
};

export const test = base.extend<ApiFixtures>({
    usersApi: async ({ request }, use) => {
        const usersApi = new UsersApi(request);
        await use(usersApi);
    },
});