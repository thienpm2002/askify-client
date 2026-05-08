import { questionsApi } from '@/api/questions'
import { useQuery } from '@tanstack/react-query'
import { questions } from '@/mocks/questions.mock'

export const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: questionsApi.getAll,
  })
}

export const useQuestionsMock = () => {
  return useQuery({
    queryKey: ['questionsMock'],
    queryFn: () => Promise.resolve({questions}),
  })
}
