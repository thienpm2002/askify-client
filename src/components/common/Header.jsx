import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import MobileMenu from '@/components/common/sidebar/MobileMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)

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
            </div>
        </div>
    </header>
  )
}

export default Header
