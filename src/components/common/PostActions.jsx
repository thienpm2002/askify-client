import { Ellipsis, Pencil, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import AppButton from './AppButton'
import { Textarea } from "@/components/ui/textarea"
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

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Link } from "react-router-dom"

const PostActions = ({ handlerDelete, handlerEdit, id, type, content, editAnswerMutation, open, setOpen }) => {

    const editAnswerSchema = z.object({
    content: z
        .string()
        .trim()
        .min(30, 'Content must be at least 30 characters'),
  })

  const {register, handleSubmit, formState:{errors, dirtyFields}} = useForm({
    resolver: zodResolver(editAnswerSchema),
    defaultValues: {
      content: content || ''
    }
  })

  return (
     <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Ellipsis className="cursor-pointer"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
           {
                type === 'question' ? (
                    <DropdownMenuItem asChild>
                        <Link to={`/${type}s/${id}/edit`}>
                            <Pencil />
                            Edit
                        </Link>
                    </DropdownMenuItem>
                ) : (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            className="cursor-pointer"
                            >
                            <Pencil />
                            Edit
                            </DropdownMenuItem>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Share link</DialogTitle>
                                <DialogDescription>
                                    Anyone who has this link will be able to view this.
                                </DialogDescription>
                            </DialogHeader>
                            
                            <form onSubmit={handleSubmit(data => handlerEdit( {content: data.content, id: parseInt(id)} ))}>
                                <Textarea id="textarea-message" placeholder="Type your message here." className='my-2 min-h-40 max-w-[75%]' {...register('content')}/>
                                    {errors.content && <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>}
                                <AppButton disabled={!dirtyFields.content || editAnswerMutation.isPending}  type="submit">{editAnswerMutation.isPending ? 'Loading...' : 'Edit answer'}</AppButton>
                            </form>

                            <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                    <Button type="button">Close</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )
            }

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
                           {` This action cannot be undone. This will permanently
                            delete your ${type}.`}
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction onClick={handlerDelete}>
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default PostActions
