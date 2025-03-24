import React from 'react'
import { Outlet } from 'react-router-dom'

const Pagetemplate = () => {
  return (
    <div className='w-full flex justify-center px-2 py-3'>
        <div className='relative w-[350px] h-[calc(100vh-40px)] rounded-lg border shadow-lg overflow-hidden'>
          <Outlet />
        </div>
    </div>
  )
}

export default Pagetemplate;