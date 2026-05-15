import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import AppButton from '@/components/common/AppButton'
import { useState } from 'react'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { getAccessToken } from '@/api/client'
import { useAskQuestion } from '@/hooks/questions'
import { useNavigate } from "react-router-dom";

const AskQuestionForm = () => {

 const [inputTag, setInputTag] = useState('');
  
 const askQuestionSchema = z.object({
    title: z
      .string()
      .trim()
      .min(15, 'Title must be at least 15 characters'),

    content: z
      .string()
      .trim()
      .min(220, 'Content must be at least 220 characters'),

    tags: z
      .array(z.string())
      .min(1, 'Please add at least 1 tags')
      .max(5, 'You can add up to 5 tags')
  })


  const {
    register, 
    handleSubmit, 
    setValue,
    watch,
    setError,
    reset,
    formState:{
      errors, 
    }} = useForm({
      resolver: zodResolver(askQuestionSchema),
      defaultValues: {
        title: '',
        content: '',
        tags: []
      }
    })

  const tags = watch('tags');

  const handlerRemoveTag = (indexToRemove) => {
      setValue(
        'tags',
        tags.filter((_, index) => index !== indexToRemove),
        {
          shouldValidate: true
        }
      );
  }

  const askQuestionMutation = useAskQuestion();

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    if(!getAccessToken()){
      toast.warning('Please log in to continue');
      return;
    }

    try {
      const question = await askQuestionMutation.mutateAsync(data);

      reset({
        title: '',
        content: '',
        tags: []
      }); 

      toast.success('Ask question successful');

      navigate(`/questions/${question.id}`); 
    } catch (error) {
      setError('root', {message: 'Ask question fail'})     
    }

  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} className='border border-chart-1 p-5 mt-10 flex flex-col gap-8 rounded-2xl max-w-150 md:m-[40px_auto]'>
        <div>
          <Label htmlFor="title" className='mb-4'>Title</Label>
          <Input id='title' className='h-10' {...register('title')}/>
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>}
        </div>

        <div>
          <Label htmlFor="content" className='mb-4'>Content</Label>
          <p className="text-sm text-muted-foreground mb-1">
            Supports Markdown formatting for code, headings, lists, and links.
          </p>
          <Textarea id="content" className='min-h-50 overflow-y-auto resize-none max-h-90' {...register('content')}/>
           {errors.content && <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>}
        </div>

        <div>
           <Label htmlFor='tags' className='mb-4'>Tags</Label>
           <div>
            {
              tags.map((tag, index) => 
                  <Badge 
                     key={index}
                  >
                    {tag} 
                    <button
                      type="button"
                      onClick={() => handlerRemoveTag(index)}
                      className="cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
              )
            }
            <Input 
              className='h-12 mt-1'
              id='tags' 
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  e.preventDefault();

                  const tag = inputTag.trim().toLowerCase().replaceAll(' ', '-');

                  if(!tag || tags.includes(tag)) return;

                  setValue('tags', [...tags, tag], {
                    shouldValidate: true
                  });

                  setInputTag('');
                }  
              }}
            />
            {errors.tags && <p className="text-red-500 text-sm mt-2">{errors.tags.message}</p>}
           </div>
        </div>
        
        {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}

        <AppButton disabled={askQuestionMutation.isPending} className="text-[12px] font-normal px-2 py-4 md:text-[14px]">{askQuestionMutation.isPending ? 'Đang gửi...' : 'Submit'}</AppButton>
    </form>
  )
}

export default AskQuestionForm
