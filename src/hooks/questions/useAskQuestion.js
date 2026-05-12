import { questionsApi } from "@/api/questions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAskQuestion = () => {

    const queryclient = useQueryClient();

    return useMutation({
        mutationFn: (data) => questionsApi.askQuestion(data),

        onSuccess: () => {
           queryclient.invalidateQueries({
               queryKey: ['questions']
           })
        }
    })
}