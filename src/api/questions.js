import client from './client'

export const questionsApi = {
  getAll:  ()       => client.get('/questions'),
  getOne:  (id)     => client.get(`/questions/${id}`),
  askQuestion:  (data)   => client.post('/questions', data),
  updateQuestion:  (id, data)  => client.put(`/questions/${id}`, data),
  deleteQuestion:  (id)     => client.delete(`/questions/${id}`),
  getAnswers: (id) => client.get(`/questions/${id}/answers`),
  searchQuestions: (query) => client.get(`/questions/search?keyword=${encodeURIComponent(query)}`),
  acceptedAnswer: (questionId, answerId) => client.patch(`/questions/${questionId}/answers/${answerId}/accepted`),
}

