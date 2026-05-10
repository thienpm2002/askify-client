import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from '@/routes'
import { Toaster } from '@/components/ui/sonner'
function App() {
  return (
    <>
      <RouterProvider router={router} />;
      
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast:
              'bg-background border border-border text-foreground',
            success:
              '!bg-green-500 !text-white !border-green-500',
            error:
              '!bg-red-500 !text-white !border-red-500',
            warning:
              '!bg-yellow-500 !text-black !border-yellow-500',
          }
        }}
      />

    </> 
  )
}

export default App
