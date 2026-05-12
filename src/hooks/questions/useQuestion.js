import { questionsApi } from '@/api/questions'
import { useQuery } from '@tanstack/react-query'
import { questions } from '@/mocks/questions.mock'

export const useQuestion = (id) => {
  return useQuery({
    queryKey: ['question', id],
    queryFn: () => questionsApi.getOne(id),
    enabled: !!id,
  })
}

export const useQuestionMock = (id) => {
  return useQuery({
    queryKey: ['questionMock', id],
    queryFn: () => Promise.resolve({question: questions.find(q => q.id === id)}),
    enabled: !!id,
  })
}