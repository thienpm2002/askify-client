
import EditQuestionForm from "./EditQuestionForm"
import BackButton from "@/components/common/BackButton"

const EditQuestionPage = () => {

  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
        <BackButton />
        <h3 className='text-[20px] font-normal md:text-2xl'>Edit Question</h3>
      </div> 
       <EditQuestionForm />
    </div>
  )
}

export default EditQuestionPage