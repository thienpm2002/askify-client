import React from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import MobileMenu from '@/components/common/sidebar/MobileMenu'
const Header = () => {
  return (
    <header className='border-b border-b-chart-1 py-4'>    
        <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>
            <div className='flex items-center gap-2'>
              <MobileMenu />
              <span className='font-bold text-lg md:text-[20px] lg:text-2xl'>Askify</span>
            </div>
            <div className='flex items-center gap-2 relative'>
              <Search className='absolute left-1 w-4 h-4 cursor-pointer' />
              <Input placeholder='Search...' className='w-45 md:w-64 lg:w-96 pl-6' />
              <Button variant='outline' className='bg-blue-600 text-white rounded-sm cursor-pointer'>Login</Button>
            </div>
        </div>
    </header>
  )
}

export default Header
