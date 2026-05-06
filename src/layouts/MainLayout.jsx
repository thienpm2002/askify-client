import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Sidebar from '@/components/common/Sidebar'

const MainLayout = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[200px_1fr] gap-4'>
      <Header />

      <Sidebar />

      <main className='border border-black p-2'>
        <Outlet />
      </main>
      
     <Footer />
    </div>
  )
}

export default MainLayout
