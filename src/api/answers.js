import client from "./client";

export const answersApi = {
    createAnswer: ({content, questionId}) => client.post('/answers', {content, questionId}),
    editAnswer: (content, id) => client.patch(`/answers/${id}`, { content }),
    deleteAnswer: (id) => client.delete(`/answers/${id}`),
}