import client from "./client";

export const authApi = {
    login: (data) => client.post('/auth/login', data),
    register: (data) => client.post('/auth/register', data),
    logout: () => client.post('/auth/logout'),
    refreshToken: () => client.post('/auth/refresh')
}