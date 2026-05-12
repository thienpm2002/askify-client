import { questionsApi } from "@/api/questions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteQuestion = () => {

    const queryclient = useQueryClient();

    return useMutation({
        mutationFn: ( questionId ) => questionsApi.deleteQuestion(questionId),

        onSuccess: () => {
           queryclient.invalidateQueries({
               queryKey: ['questions']
           });
        }
    })
}