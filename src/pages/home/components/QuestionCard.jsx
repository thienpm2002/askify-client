
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"

const QuestionCard = ({id, voteCount, answerCount, title, content, tags, author, createdAt }) => {
  return (
    <Card className='mt-4 rounded-[8px] max-w-4xl'>
        <CardContent>
            {/* Stats */}
            <div className='flex gap-1 items-center text-[12px] font-normal'>
                <span>{voteCount}</span>
                <span>Votes</span>
                <span className="text-muted-foreground">{answerCount}</span>
                <span className="text-muted-foreground">Answers</span>
            </div>
            {/* Content */} 
            <div className="mt-2">
                <Link to={`/questions/${id}`} className="cursor-pointer"> 
                    <h4 className="text-[14px] lg:text-[18px] font-semibold text-blue-500 line-clamp-2">{title}</h4>
                </Link>
                <p className='text-[10px] lg:text-[14px] line-clamp-2'>{content}</p>
            </div>
            <div className='flex justify-between items-center flex-wrap gap-2'>
                {/* Tags */}
                <div className='flex gap-2 items-center font-bold text-[10px] lg:text-[14px] mt-2'>
                    {
                        tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className='rounded-xs'>{tag}</Badge>
                        ))
                    }
                </div>
                {/* Author and time */}
                <div className='flex gap-1 items-center text-[10px] lg:text-[12px] mt-2'>
                    <Avatar className='w-4 lg:w-5 h-4 lg:h-5'>
                        <AvatarImage src={author.avatarUrl || 'https://github.com/shadcn.png'} />
                        <AvatarFallback>{author.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-indigo-600">{author.userName}</span>
                    <span>•</span>
                    <span className="text-muted-foreground">{formatDistanceToNow(new Date(createdAt),{ addSuffix: true })}</span>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default QuestionCard