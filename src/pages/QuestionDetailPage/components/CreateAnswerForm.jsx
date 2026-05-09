
import { Textarea } from "@/components/ui/textarea"

import AppButton from '@/components/common/AppButton'

const CreateAnswerForm = () => {
  return (
    <div className="mt-4">
      <h3>Your Answer</h3>
      <Textarea id="textarea-message" placeholder="Type your message here." className='my-2 min-h-40 max-w-[75%]' />
      <AppButton className="text-[12px] font-normal px-2 py-4 md:text-[14px]">Ask answer</AppButton>
    </div>
  )
}

export default CreateAnswerForm