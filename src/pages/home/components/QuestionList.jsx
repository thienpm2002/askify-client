import {useQuestions} from '@/hooks/questions'
import QuestionCard from './QuestionCard'
import QuestionCardSkeleton from './QuestionCardSkeleton'

const QuestionList = () => {
    const { data, isLoading } = useQuestions();

    if (isLoading) {
        return [1,2,3].map(value => (
            <QuestionCardSkeleton key={value} />
        ))
    }

    return data.content?.map(question => (
        <QuestionCard
            key={question.id}
            {...question}
        />
    ))
}

export default QuestionList