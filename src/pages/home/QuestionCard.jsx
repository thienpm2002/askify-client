
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

const QuestionCard = () => {
  return (
    <Card className='mt-4 rounded-[8px] max-w-4xl'>
        <CardContent>
            {/* Stats */}
            <div className='flex gap-1 items-center text-[12px] font-normal'>
                <span>0</span>
                <span>Votes</span>
                <span className="text-muted-foreground">0</span>
                <span className="text-muted-foreground">Answers</span>
            </div>
            {/* Content */} 
            <div className="mt-2">
                <Link to="/questions/1" className="cursor-pointer"> 
                    <h4 className="text-[14px] lg:text-[18px] font-semibold text-blue-500 line-clamp-2">Is staging slowly becoming less relevant in modern CI/CD systems?</h4>
                </Link>
                <p className='text-[10px] lg:text-[14px] line-clamp-2'>If production is the only environment that truly reflects real user behavior, does it make more sense for teams to focus more on observability, feature flags, and controlled production testing instead of heavily investing in near-perfect staging environments?</p>
            </div>
            <div className='flex justify-between items-center flex-wrap gap-2'>
                {/* Tags */}
                <div className='flex gap-2 items-center font-bold text-[10px] lg:text-[14px] mt-2'>
                    <Badge variant="secondary" className='rounded-xs'>testing</Badge>
                    <Badge variant="secondary" className='rounded-xs'>ci/cd</Badge>
                    <Badge variant="secondary" className='rounded-xs'>deployment</Badge>
                </div>
                {/* Author and time */}
                <div className='flex gap-1 items-center text-[10px] lg:text-[12px] mt-2'>
                    <Avatar className='w-4 lg:w-5 h-4 lg:h-5'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-indigo-600">John Doe</span>
                    <span>•</span>
                    <span className="text-muted-foreground">2 hours ago</span>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default QuestionCard