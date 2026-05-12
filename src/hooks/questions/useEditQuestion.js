import { questionsApi } from "@/api/questions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditQuestion = () => {

    const queryclient = useQueryClient();

    return useMutation({
        mutationFn: ({ questionId, data }) => questionsApi.updateQuestion(questionId, data),

        onSuccess: (data) => {
           queryclient.invalidateQueries({
               queryKey: ['questions']
           });
           queryclient.invalidateQueries({
               queryKey: ['question', data.id]
           })
        }
    })
}