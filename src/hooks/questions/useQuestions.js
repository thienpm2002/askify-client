import { questionsApi } from '@/api/questions'
import { useQuery } from '@tanstack/react-query'

export const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: questionsApi.getAll,
  })
}
