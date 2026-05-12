
import UserMeta from '@/components/common/UserMeta'
import { Ellipsis, Pencil, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Link, useNavigate } from "react-router-dom"
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Ellipsis className="cursor-pointer"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to={`/questions/${questionId}/edit`}>
                        <Pencil />
                        Edit
                    </Link>
                </DropdownMenuItem>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem
                        className="text-red-500 cursor-pointer"
                        onSelect={(e) => e.preventDefault()}
                        >
                            <Trash2 />
                            Delete
                        </DropdownMenuItem>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>

                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently
                                delete your question.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                Cancel
                            </AlertDialogCancel>

                            <AlertDialogAction onClick={handleDeleteQuestion}>
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
  )
}

export default QuestionHeader
