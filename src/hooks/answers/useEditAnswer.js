import { answersApi } from "@/api/answers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditAnswer = () => {
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({content, id}) => answersApi.editAnswer(content, id),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['questionAnswers', data.questionId]
            })
        }
    })
}