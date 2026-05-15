import client from "./client";

export const votesApi = {
    vote: (data) => client.post('/votes', data),
}