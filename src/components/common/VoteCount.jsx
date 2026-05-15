import { ChevronUp, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { votesApi } from '@/api/votes';
import { toast } from 'sonner';
import { Check } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAcceptedAnswer } from '@/hooks/questions';

const VoteCount = ({
  parentId,
  targetId,     // ID của phần tử muốn vote
  targetType,   // QUESTION | ANSWER
  authorId,     // Chủ sở hữu của targetId
  voteCount,
  currentUserVote,   // Tạng thái vote( UPVOTE | DOWNVOTE ) của user hiện tại
  authorQuestion,   // Chủ sở hữu của question 
  isAccepted,      // Answer có accepted
}) => {

  const queryClient = useQueryClient();

  const { user, isAuthenticated } = useAuth();

  const isOwner = isAuthenticated && user?.id === authorId;  // Chủ sở hữu không được vote

  const isOwnerQuestion =  isAuthenticated && user?.id === authorQuestion ; // Chủ sở hữu question mới được check
  
   
  const voteMutation = useMutation({
    mutationFn: (nextVoteType) => {
      return votesApi.vote({
        targetId: parseInt(targetId),
        targetType,
        voteType: nextVoteType
      })
    },

    onSuccess: () => {
      const isQuestion = targetType === 'QUESTION' ? true: false;
      if(isQuestion){
        queryClient.invalidateQueries({
          queryKey: ['question', parseInt(targetId)]
        })
      } else {
        queryClient.invalidateQueries({
          queryKey: ['questionAnswers', parseInt(parentId)]
        })
      }

       queryClient.invalidateQueries({
          queryKey: ['questions']
        })
    },

    onError: () => {
      toast.error('Vote fail');
    }
  })


  const handlerVote = async (nextVoteType) => {

    if(!isAuthenticated){
      toast.warning('Please log in to continue');
      return;
    }

    voteMutation.mutate(nextVoteType);
  };

  const acceptedAnswerMutation = useAcceptedAnswer();

  const handlerAccepted = async () => {
    
    try {
      await acceptedAnswerMutation.mutateAsync({questionId: parentId, answerId: targetId});

      toast.success('Change accepted answer successfully')

      queryClient.invalidateQueries({
          queryKey: ['question', parseInt(parentId)]
      })

       queryClient.invalidateQueries({
          queryKey: ['questions']
        })

    } catch (error) {
      toast.error('Change accepted answer fail')
    }
  }

  return (
    <div className="shrink-0 flex flex-col justify-start items-center gap-1">

      <button
        onClick={() => handlerVote('UPVOTE')}
        disabled={isOwner}
        className={`
          border rounded-full p-1 transition-colors
          ${
            isAuthenticated && currentUserVote === 'UPVOTE'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black'
          }
          ${
            isOwner
              ? 'opacity-50 pointer-events-none'
              : 'cursor-pointer'
          }
        `}
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <span className="text-[16px] md:text-lg font-medium">
        {voteCount}
      </span>

      {
        isOwnerQuestion && 

        <Check
          onClick={handlerAccepted}
          className={`
            w-6 h-6 cursor-pointer transition-colors
            ${
              isAccepted
              ? 'text-green-300'
              : 'text-gray-200'
            }
          `}
        /> 
      }
      

      <button
        onClick={() => handlerVote('DOWNVOTE')}
        disabled={isOwner}
        className={`
          border rounded-full p-1 transition-colors
          ${
            isAuthenticated && currentUserVote === 'DOWNVOTE'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black'
          }
          ${
            isOwner
              ? 'opacity-50 pointer-events-none'
              : 'cursor-pointer'
          }
        `}
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default VoteCount;