import { answersApi } from "@/api/answers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAskAnswer = () => {
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({content, questionId}) => answersApi.createAnswer({content, questionId}),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['questionAnswers', data.questionId]
            })
        }
    })
}