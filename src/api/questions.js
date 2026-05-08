import client from './client'

export const questionsApi = {
  getAll:  ()       => client.get('/questions'),
  getOne:  (id)     => client.get(`/questions/${id}`),
  create:  (data)   => client.post('/questions', data),
  update:  (id, data)  => client.put(`/questions/${id}`, data),
  remove:  (id)     => client.delete(`/questions/${id}`),
  getAnswers: (id) => client.get(`/questions/${id}/answers`),
  searchQuestions: (query) => client.get(`/questions/search?keyword=${encodeURIComponent(query)}`),
}

