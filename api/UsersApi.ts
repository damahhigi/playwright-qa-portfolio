import { APIRequestContext } from '@playwright/test';

export class UsersApi {
    readonly request: APIRequestContext;
    readonly baseUrl = process.env.API_BASE_URL ?? '';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getUsers() {
        return await this.request.get(`${this.baseUrl}/users`);
    }

    async getUser(userId: number) {
        return await this.request.get(`${this.baseUrl}/users/${userId}`);
    }

    async createUser(userData: object) {
    return await this.request.post(`${this.baseUrl}/users`, {
        data: userData
    }); 
    }
    async updateUser(userId: number, userData: object) {
    return await this.request.put(`${this.baseUrl}/users/${userId}`, {
        data: userData
    });
    }
    async partiallyUpdateUser(userId: number, userData: object) {
    return await this.request.patch(`${this.baseUrl}/users/${userId}`, {
        data: userData
    });
    }
    async deleteUser(userId: number) {
    return await this.request.delete(`${this.baseUrl}/users/${userId}`);
    }
}