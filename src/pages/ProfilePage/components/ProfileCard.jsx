import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import EditProfileDialog from './EditProfileDialog'
import { useAuth } from '@/contexts/AuthContext'

const ProfileCard = () => {
  const { user } = useAuth();
  return (
       <div 
          className="
            rounded-2xl 
            overflow-hidden 
            border 
            pb-4 
            flex flex-col items-center 
            max-w-150 
            m-auto 
            mt-10
            relative
            shadow-[0px_1px_2px_rgba(16,24,40,0.04),0px_1px_3px_rgba(16,24,40,0.08)]"
        >

          <div className="w-full h-40 bg-linear-to-r from-indigo-500 to-purple-500" />

          <div className="px-6 pb-6 mt-4 flex flex-col items-center">
            <Avatar className='w-20 md:w-25 lg:w-30 h-20 md:h-25 lg:h-30 absolute top-28 md:top-26 lg:top-23'>
                <AvatarImage src={user.avatarUrl ?  `${import.meta.env.VITE_API_URL}${user.avatarUrl}` : 'https://github.com/shadcn.png'} />
                <AvatarFallback>{user.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className="text-[20px] mt-5 md:mt-8 lg:mt-10 md:text-2xl font-bold">{user.userName}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>

          <EditProfileDialog />
      </div>
  )
}

export default ProfileCard
