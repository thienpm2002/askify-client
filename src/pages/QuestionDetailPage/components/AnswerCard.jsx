import { useState } from 'react';
import VoteCount from '@/components/common/VoteCount';
import ReactMarkdown from "react-markdown";
import UserMeta from '@/components/common/UserMeta'
import PostActions from '@/components/common/PostActions'
import { useAuth } from '@/contexts/AuthContext';
import { useEditAnswer, useDeleteAnswer } from '@/hooks/answers';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const AnswerCard = ({ 
  questionId, 
  authorQuestion, 
  id, 
  voteCount, 
  content, 
  author, 
  createdAt, 
  currentUserVote, 
  acceptedAnswerId
}) => {

  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const isAuthor = (user?.id === author.id) || false;

  const editAnswerMutation = useEditAnswer();

  const deleteAnswerMutation = useDeleteAnswer();

  const queryClient = useQueryClient();
  
  const handleDeleteAnswer = async () => {
        try {
            await deleteAnswerMutation.mutateAsync(id);

            queryClient.invalidateQueries({
              queryKey: ['questionAnswers', questionId],
            })
            
            toast.success('Delete question successful')

        } catch (error) {
            toast.error("Delete question failed");
        }
        console.log('Delete');
  }

  const handlerEditAnswer = async (data) => {
    try {
      await editAnswerMutation.mutateAsync(data);

      toast.success('Edit answer successful');

      setOpen(false);

    } catch (error) {
      toast.error("Edit answer failed");
    }
  }


  return (
    <div className={`py-6 px-2 mt-4 border rounded-[8px] ${id === acceptedAnswerId ?'border-green-300 bg-green-50/40' : 'border-b-gray-200'}`}>
      <div className='flex gap-4'>
        <VoteCount 
          key={`answer-${id}`} 
          voteCount={voteCount} 
          authorId={author.id} 
          targetId={id} 
          parentId={questionId} 
          authorQuestion={authorQuestion} 
          targetType='ANSWER' 
          currentUserVote={currentUserVote} 
          isAccepted={acceptedAnswerId === id}
        />
        <div className="flex-1 max-w-none overflow-x-auto flex justify-between">
            <div className="prose prose-sm dark:prose-invert max-w-none text-[16px] md:text-lg">
                <ReactMarkdown>  
                    {content}
                </ReactMarkdown>
            </div>
            {
              isAuthor && 
              <div>
                <PostActions 
                  type='answer' 
                  handlerDelete={handleDeleteAnswer} 
                  id={id} 
                  content={content} 
                  handlerEdit={handlerEditAnswer} 
                  editAnswerMutation={editAnswerMutation} 
                  open={open} 
                  setOpen={setOpen}
                />
              </div>
            }
        </div>
      </div>
      
      <div className='flex justify-end mt-4'>
        <UserMeta {...author} time={createdAt} actionType='Answered'/>  
      </div>
    </div>
  )
}

export default AnswerCard
