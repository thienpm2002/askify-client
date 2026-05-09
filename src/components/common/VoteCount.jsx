
import {ChevronUp, ChevronDown} from 'lucide-react'

const VoteCount = ({ voteCount }) => {
  return (
    <div className="shrink-0 flex flex-col justify-start items-center">
        <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer">
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <span className="text-sm md:text-lg font-medium">{voteCount}</span>

        <div className="p-1 hover:bg-gray-200 rounded-full cursor-pointer">
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
    </div>
  )
}

export default VoteCount
