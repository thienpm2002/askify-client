
import UserMeta from '@/components/common/UserMeta'

import PostActions from "@/components/common/PostActions"

import { useNavigate } from "react-router-dom"
import { toast } from 'sonner'

import { useDeleteQuestion } from "@/hooks/questions"
import { useAuth } from '@/contexts/AuthContext'

const QuestionHeader = ({ id, title, author, createdAt }) => {
  
  const {user} = useAuth();

  const isAuthor = (user?.id === author.id) || false;

  const navigate = useNavigate();

  const deleteQuestionMutation = useDeleteQuestion();
  
  const handleDeleteQuestion = async () => {
        try {
            await deleteQuestionMutation.mutateAsync(id);
            
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
          {isAuthor && <PostActions id={id} handlerDelete={handleDeleteQuestion} type='question'/>}
        </div>
    </div>
  )
}

export default QuestionHeader
