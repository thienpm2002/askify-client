import { questionsApi } from '@/api/questions'
import { useQuery } from '@tanstack/react-query'
import { answers } from '@/mocks/answers.mock'

export const useQuestionAnswers = (questionId) => {
  return useQuery({
    queryKey: ['questionAnswers', questionId],
    queryFn: () => questionsApi.getAnswers(questionId),
    enabled: !!questionId,
  })
}

export const useQuestionAnswersMock = (questionId) => {
  return useQuery({
    queryKey: ['questionAnswersMock', questionId],
    queryFn: () => Promise.resolve({answers: answers.filter(a => a.questionId === questionId)}),
    enabled: !!questionId,
  })
}