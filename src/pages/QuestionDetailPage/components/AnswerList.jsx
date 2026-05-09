
import { useQuestionAnswersMock } from '@/hooks/questions/index'
import {MessageCircle} from 'lucide-react'
import AnswerCard from './AnswerCard'

const AnswerList = ({ question }) => {

  const { data, isLoading }  = useQuestionAnswersMock(parseInt(question.id));

  const answers = data?.answers ?? [];

  return (
    <div className='mt-4'>
        <div className='border-b border-b-gray-200 pb-4'>
          <span className='rounded-2xl bg-gray-50 border border-gray-200 px-4 py-2 inline-flex'>
            <MessageCircle className='w-4 h-4 mr-1 md:w-5 md:h-5'/>
            <span className='text-xs md:text-[16px] font-medium'>{`${question.answerCount} answer`}</span>
          </span>
        </div>
        {
            answers?.map(answer => <AnswerCard key={answer.id} {...answer} />)
        } 
    </div>
  )
}

export default AnswerList