import BackButton from "@/components/common/BackButton"
import AskQuestionForm from './AskQuestionForm'

const AskQuestionPage = () => {
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
          <BackButton />  
          <h2 className="text-[18px] font-bold">Ask Question</h2>
      </div> 
      <AskQuestionForm />
    </div>
  )
}

export default AskQuestionPage