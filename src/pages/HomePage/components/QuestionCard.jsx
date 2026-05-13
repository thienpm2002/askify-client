
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import UserMeta from '@/components/common/UserMeta'
import PostActions from "@/components/common/PostActions"
import { useAuth } from "@/contexts/AuthContext"
import { useDeleteQuestion } from "@/hooks/questions"

const QuestionCard = ({id, voteCount, answerCount, title, content, tags, author, createdAt }) => {
  
  const { user } = useAuth();
  const isAuthor = (user?.id === author.id) || false;
  
  const deleteQuestionMutation = useDeleteQuestion();

  const handleDeleteQuestion = async () => {
        try {
            await deleteQuestionMutation.mutateAsync(id);
            
            toast.success('Delete question successful')

        } catch (error) {
            toast.error("Delete question failed");
        }
  }

  return (
    <Card className='mt-4 rounded-[8px] max-w-4xl'>
        <CardContent>
            {/* Stats */}
            <div className="flex justify-between">
               <div className='flex gap-1 items-center text-[12px] font-normal'>
                    <span>{voteCount}</span>
                    <span>Votes</span>
                    <span className="text-muted-foreground">{answerCount}</span>
                    <span className="text-muted-foreground">Answers</span>
                </div>
                <div>
                   {isAuthor &&
                    <>
                     <PostActions id={id} handlerDelete={handleDeleteQuestion} type='question'/>
                    </>
                   }
                </div>
            </div>
            {/* Content */} 
            <div className="mt-2">
                <Link to={`/questions/${id}`} className="cursor-pointer"> 
                    <h4 className="text-[14px] lg:text-[18px] font-semibold text-blue-500 line-clamp-2">{title}</h4>
                </Link>
                <p className='text-[10px] lg:text-[14px] line-clamp-2'>{content}</p>
            </div>
            <div className='flex justify-between items-center flex-wrap gap-2'>
                {/* Tags */}
                <div className='flex gap-2 items-center font-bold text-[10px] lg:text-[14px] mt-2'>
                    {
                        tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className='rounded-xs'>{tag}</Badge>
                        ))
                    }
                </div>
                {/* Author and time */}
                <UserMeta {...author} time={createdAt} actionType='Asked'/>  
            </div>
        </CardContent>
    </Card>
  )
}

export default QuestionCard