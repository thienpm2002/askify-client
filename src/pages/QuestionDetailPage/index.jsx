
import BackButton from '@/components/common/BackButton';
import AppButton from "@/components/common/AppButton";
import  QuestionHeader from './components/QuestionHeader';
import AnswerList from './components/AnswerList';
import QuestionBody from './components/QuestionBody';
import { useParams } from 'react-router-dom';
import { useQuestionMock } from '@/hooks/questions';
import QuestionCardSkeleton from '@/components/common/QuestionCardSkeleton'
import CreateAnswerForm from './components/CreateAnswerForm'

const QuestionDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuestionMock(parseInt(id));

  const question = data?.question ?? [];
  
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
          <BackButton />  
          <AppButton className="text-[12px] font-normal px-3 py-5 md:text-[14px]">Ask Question</AppButton>
      </div> 
      {
        isLoading ? 
        [1,2,3].map(value => (
          <QuestionCardSkeleton key={value} />
        )) 
        :
        <>
          <QuestionHeader title={question.title} author={question.author} createdAt={question.createdAt}/>
          <QuestionBody content={question.content} tags={question.tags} voteCount={question.voteCount}/> 
        </> 
      }
      <AnswerList question={question}/>
      <CreateAnswerForm />
    </div>
  )
}

export default QuestionDetailPage