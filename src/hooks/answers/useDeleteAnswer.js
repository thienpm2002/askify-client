import { answersApi } from "@/api/answers";
import { useMutation } from "@tanstack/react-query";

export const useDeleteAnswer = () => {
    return useMutation({
        mutationFn: ( answerId ) => answersApi.deleteAnswer(answerId),
    })
}