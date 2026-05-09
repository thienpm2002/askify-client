
import UserMeta from '@/components/common/UserMeta'

const QuestionHeader = ({title, author, createdAt}) => {
  return (
    <div className='mt-10 mb-4 pb-4 border-b border-b-gray-200'>
       <h2 className='text-xl md:text-2xl font-bold'>{title}</h2>   

       <UserMeta {...author} time={createdAt} actionType='Asked'/>  
    </div>
  )
}

export default QuestionHeader
