
import BackButton from '@/components/common/BackButton';
import AppButton from "@/components/common/AppButton";
import  QuestionHeader from './components/QuestionHeader';
import AnswerList from './components/AnswerList';
import QuestionBody from './components/QuestionBody';
import { useParams } from 'react-router-dom';
import { useQuestion } from '@/hooks/questions';
import QuestionCardSkeleton from '@/components/common/QuestionCardSkeleton'
import CreateAnswerForm from './components/CreateAnswerForm'
import { Link } from 'react-router-dom';

const QuestionDetailPage = () => {
  const { id: questionId } = useParams();

  const { data , isLoading } = useQuestion(parseInt(questionId));

  const question = data ?? [];
 
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
          <BackButton />  
          <AppButton className="text-[12px] font-normal px-3 py-5 md:text-[14px]">
            <Link
              to='/questions/ask'
            >
              Ask Question
            </Link>
          </AppButton>
      </div> 
      {
        isLoading ? 
        [1,2,3].map(value => (
          <QuestionCardSkeleton key={value} />
        )) 
        :
        <>
          <QuestionHeader {...question}/>
          <QuestionBody {...question}/> 
        </> 
      }
      <AnswerList question={question}/>
      <CreateAnswerForm questionId={question.id}/>
    </div>
  )
}

export default QuestionDetailPage