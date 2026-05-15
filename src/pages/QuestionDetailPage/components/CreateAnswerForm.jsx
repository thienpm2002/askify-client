
import { Textarea } from "@/components/ui/textarea"
import AppButton from '@/components/common/AppButton'

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useAskAnswer } from '@/hooks/answers';
import { getAccessToken } from "@/api/client"

const CreateAnswerForm = ({ questionId }) => {

  const askAnswerSchema = z.object({
    content: z
        .string()
        .trim()
        .min(30, 'Content must be at least 30 characters'),
  })

  const {register, handleSubmit, setError, reset, formState:{errors}} = useForm({
    resolver: zodResolver(askAnswerSchema),
    defaultValues: {
      content: ''
    }
  })

  const askAnswerMutation = useAskAnswer();

  const onSubmit = async (data) => {
    if(!getAccessToken()){
          toast.warning('Please log in to continue');
          return;
    }
    try {
      await askAnswerMutation.mutateAsync(data);

      reset({content: ''});
      
      toast.success('Ask answer successfuly');
    } catch (error) {
      setError('root', {message: 'Ask answer fail'})   
    } 
  }

  return (
    <div className="mt-4">
      <h3>Your Answer</h3>
      <form onSubmit={handleSubmit(data => onSubmit( {content: data.content, questionId: parseInt(questionId)} ))}>
        <Textarea id="textarea-message" placeholder="Type your message here." className='my-2 min-h-40 max-w-[75%]' {...register('content')}/>
       
         {errors.content && <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>}

         {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}

        <AppButton disabled={askAnswerMutation.isPending} type='submit' className="text-[12px] font-normal px-2 py-4 md:text-[14px]">{askAnswerMutation.isPending ? 'Loading...' : 'Ask answer'}</AppButton>
      </form>
    </div>
  )
}

export default CreateAnswerForm