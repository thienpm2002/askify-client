
import EditQuestionForm from "./EditQuestionForm"
import PageHeader from "@/components/common/PageHeader"

const EditQuestionPage = () => {

  return (
    <div className='p-4'>
      <PageHeader title='Edit Question'/>
       
      <EditQuestionForm />
    </div>
  )
}

export default EditQuestionPage