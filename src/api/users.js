import client from "./client";

export const usersApi = {
    currentUser: () => client.get('/users/me'),
    updateProfile: (data) => client.patch('/users/me', data),
    updateAvatar: (data) => client.patch('/users/me/avatar', data) 
}