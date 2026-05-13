import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MobileMenu from '@/components/common/sidebar/MobileMenu'
import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useLogout } from '@/hooks/auth'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  LogOutIcon,
  UserIcon,
} from "lucide-react"

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const { user, isAuthenticated } = useAuth();
  const logOutMutation = useLogout();

  return (
    <header className='border-b border-b-chart-1 py-4 relative'>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>
            <div className='flex items-center gap-2'>
              <MobileMenu />

              <span className='font-bold text-lg md:text-[20px] lg:text-2xl'>Askify</span>
            </div>

            <div className='flex items-center gap-2 relative'>
              <Search onClick={() => setIsOpenSearch(prev => !prev)} className='w-5 h-5 md:hidden cursor-pointer' />

              <div className={`${isOpenSearch ? "flex": "hidden"} md:flex justify-center w-screen md:w-64 lg:w-96 bg-gray-100 md:bg-transparent absolute -right-4 top-10 p-2 md:static`}>
                <Search className='hidden md:block absolute left-3 top-4 w-4 h-4' />
                <Input placeholder='Search...' className='pl-6 w-[95%] md:w-full bg-white md:bg-gray-100' />  
              </div> 
              
              {
                isAuthenticated ? 
                <>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className='w-6 lg:w-8 h-6 lg:h-8 cursor-pointer relative'>
                        <AvatarImage src={user.avatarUrl ?  `${import.meta.env.VITE_API_URL}${user.avatarUrl}` : 'https://github.com/shadcn.png'} />
                        <AvatarFallback>{user.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                         <Link to='/profile'>
                            <UserIcon />
                            Profile
                          </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem variant="destructive" onClick={() => logOutMutation.mutate()}>
                        <LogOutIcon />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <span className="text-indigo-600 hidden md:block">{user.userName}</span>
                </>
                :
                <>
                  <Button variant='outline' className='bg-blue-600 text-white rounded-sm cursor-pointer'>
                    <Link to='/login'>
                      Login
                    </Link>
                  </Button>

                  <Button variant='outline' className='bg-blue-600 text-white rounded-sm cursor-pointer'> 
                    <Link to='/register'>
                      Register
                    </Link>
                  </Button>
                </>
              }
            </div>
        </div>
    </header>
  )
}

export default Header
