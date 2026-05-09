import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge"
import VoteCount from '@/components/common/VoteCount'

const QuestionBody = ({content, tags, voteCount}) => {
  return (
    <div className="flex gap-4 pb-6 border-b border-b-gray-200">
        <VoteCount voteCount={voteCount}/>
        
        <div className="flex-1 min-w-0">
            <div className="overflow-x-auto">
                <div className="prose prose-sm dark:prose-invert max-w-none text-[16px] md:text-lg">
                    <ReactMarkdown>  
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
            <div className='flex gap-2 items-center flex-wrap font-bold text-[10px] lg:text-[14px] mt-4'>
                {
                    tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className='rounded-xs'>{tag}</Badge>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default QuestionBody
