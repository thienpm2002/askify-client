import BackButton from "./BackButton"
import AppButton from "./AppButton"
import { Link } from "react-router-dom"

const PageHeader = ({ title }) => {
  return (

    <div>
      <div className="flex justify-center mb-4">
        <h2 className="text-[18px] lg:text-2xl font-bold">
            {title}
        </h2>
      </div>

      <div className="relative flex items-center justify-between">
        <BackButton />

        <AppButton className="text-[12px] font-normal px-2 py-3 md:text-[14px]">
            <Link
                to='/questions/ask'
            >
                Ask Question
            </Link>
        </AppButton>
      </div>

    </div>
  )
}

export default PageHeader
