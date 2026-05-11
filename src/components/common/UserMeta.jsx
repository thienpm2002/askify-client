import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

const UserMeta = ({userName, time, actionType, avatarUrl }) => {
  return (
    <div className='flex gap-1 items-center text-[10px] lg:text-[12px] mt-4'>
            <Avatar className='w-4 lg:w-5 h-4 lg:h-5'>
                <AvatarImage src={avatarUrl ?  `${import.meta.env.VITE_API_URL}${avatarUrl}` : 'https://github.com/shadcn.png'} />
                <AvatarFallback>{userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-indigo-600">{userName}</span>
            <span>{`• ${actionType}`}</span>
            <span className="text-muted-foreground">{formatDistanceToNow(new Date(time),{ addSuffix: true })}</span>
    </div>
  )
}

export default UserMeta
