import PageHeader from '@/components/common/PageHeader'
import AskQuestionForm from './AskQuestionForm'

const AskQuestionPage = () => {
  return (
    <div className='p-4'>
      <PageHeader title='Ask Question'/>
      <AskQuestionForm />
    </div>
  )
}

export default AskQuestionPage