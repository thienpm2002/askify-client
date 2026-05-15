
import { useQuestionAnswers } from '@/hooks/questions'
import {MessageCircle} from 'lucide-react'
import AnswerCard from './AnswerCard'

const AnswerList = ({ question }) => {
  
  const { data, isLoading }  = useQuestionAnswers(parseInt(question.id));
  
  const answers = data?.content ?? [];

  return (
    <div className='mt-4'>
        <div className='pb-4'>
          <span className='rounded-2xl bg-gray-50 border border-border px-4 py-2 inline-flex'>
            <MessageCircle className='w-4 h-4 mr-1 md:w-5 md:h-5'/>
            <span className='text-xs md:text-[16px] font-medium'>{`${question.answerCount} answer`}</span>
          </span>
        </div>
        {
          isLoading ? 
            <p>Loading...</p> 
          : 
            answers?.map(answer => 
              <AnswerCard 
                key={answer.id} 
                {...answer} 
                questionId={question.id} 
                authorQuestion={question.author.id}
                acceptedAnswerId={question.acceptedAnswerId}
              />
            )
        } 
    </div>
  )
}

export default AnswerList