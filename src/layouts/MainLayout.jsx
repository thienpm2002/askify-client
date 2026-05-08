import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Sidebar from '@/components/common/sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

       <div className="mx-auto flex w-full max-w-7xl flex-1 gap-4 py-4">
        <Sidebar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      
     <Footer />
    </div>
  )
}

export default MainLayout
