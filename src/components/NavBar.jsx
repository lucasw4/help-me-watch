import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-screen bg-gray-200 h-10 flex items-center justify-between px-10'>
        <span className='text-orange-400'>
            HelpMeWatch
        </span>
        <div className='text-red-700 w-32 flex justify-between'>
            <Link href={'/login'}>
                Login
            </Link>
            <Link href={'/'}>
                Register
            </Link>
        </div>
    </div>
  )
}

export default NavBar