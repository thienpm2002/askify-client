import client from "./client";
import  refreshClient  from "./refreshClient";

export const authApi = {
    login: (data) => client.post('/auth/login', data),
    register: (data) => client.post('/auth/register', data),
    logout: () => client.post('/auth/logout'),
    refreshToken: () => refreshClient.post('/auth/refresh')
}