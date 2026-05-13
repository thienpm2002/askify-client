
import UserMeta from '@/components/common/UserMeta'

import PostActions from "@/components/common/PostActions"

import { useNavigate } from "react-router-dom"
import { toast } from 'sonner'

import { useDeleteQuestion } from "@/hooks/questions"

const QuestionHeader = ({ questionId, title, author, createdAt }) => {
  
  const navigate = useNavigate();

  const deleteQuestionMutation = useDeleteQuestion();
  
  const handleDeleteQuestion = async () => {
        try {
            await deleteQuestionMutation.mutateAsync(questionId);
            
            toast.success('Delete question successful');

            navigate('/');

        } catch (error) {
            toast.error("Delete question failed");
        }
  }

  return (
    <div className='flex justify-between items-center border-b border-border mt-10 mb-4 pb-4'>
       <div>
          <h2 className='text-xl md:text-2xl font-bold'>{title}</h2>   

          <UserMeta {...author} time={createdAt} actionType='Asked'/>  
        </div>

        <div>
          <PostActions id={questionId} handlerDelete={handleDeleteQuestion} type='question'/>
        </div>
    </div>
  )
}

export default QuestionHeader
