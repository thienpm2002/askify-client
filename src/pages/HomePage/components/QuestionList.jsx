import {useQuestions, useQuestionsMock } from '@/hooks/questions'
import QuestionCard from './QuestionCard'
import QuestionCardSkeleton from '@/components/common/QuestionCardSkeleton'

const QuestionList = () => {
    // const { data, isLoading } = useQuestions();
    
    // if (isLoading) {
    //     return [1,2,3].map(value => (
    //         <QuestionCardSkeleton key={value} />
    //     ))
    // }

    // return data.content?.map(question => (
    //     <QuestionCard
    //         key={question.id}
    //         {...question}
    //     />
    // ))

    /* Mocks data */
    const { data, isLoading } = useQuestionsMock();
    
    if (isLoading) {
        return [1,2,3].map(value => (
            <QuestionCardSkeleton key={value} />
        ))
    }

    return data.questions?.map(question => (
        <QuestionCard
            key={question.id}
            {...question}
        />
    ))
}

export default QuestionList