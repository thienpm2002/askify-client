import { questionsApi } from "@/api/questions";
import { useMutation } from "@tanstack/react-query";

export const useAcceptedAnswer = () => {

    return useMutation({
        mutationFn: ( {questionId, answerId} ) => questionsApi.acceptedAnswer(questionId, answerId),
    })
}