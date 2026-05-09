
import VoteCount from '@/components/common/VoteCount';
import ReactMarkdown from "react-markdown";
import UserMeta from '@/components/common/UserMeta'

const AnswerCard = ({ voteCount, content, author, createdAt}) => {
    console.log(voteCount, content);
  return (
    <div className='pb-6 mt-4 border-b border-b-gray-200'>
      <div className='flex gap-4'>
        <VoteCount voteCount={voteCount}/>
        <div className="flex-1 max-w-none overflow-x-auto">
            <div className="prose prose-sm dark:prose-invert max-w-none text-[16px] md:text-lg">
                <ReactMarkdown>  
                    {content}
                </ReactMarkdown>
            </div>
        </div>
      </div>
      
      <div className='flex justify-end mt-4'>
        <UserMeta {...author} time={createdAt} actionType='Answered'/>  
      </div>
    </div>
  )
}

export default AnswerCard
