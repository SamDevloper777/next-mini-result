import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center h-screen flex-col justify-center'>
      <h1 className='text-4xl mb-6'>Result Management System</h1>
      <div className='grid grid-cols-2 gap-10 '>
          <Link href="/insert" className='bg-blue-600 rounded w-[200px] flex items-center justify-center px-3 py-2 text-white'>Insert</Link>
          <Link href="/manage" className='bg-teal-600 rounded w-[200px] flex items-center justify-center px-3 py-2 text-white '>Manage</Link>
      </div>
    </div>
  )
}

export default page