
import AppButton from "@/components/common/AppButton"
import QuestionList from "./components/QuestionList"

const HomePage = () => {
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center">
        <h3 className='text-[20px] font-normal md:text-2xl'>Newset Questions</h3>
        <AppButton className="text-[12px] font-normal px-3 py-5 md:text-[14px]">Ask Question</AppButton>
      </div> 
       <QuestionList />
    </div>
  )
}

export default HomePage