import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-screen bg-zinc-700 h-10 flex items-center justify-between px-10'>
        <span className='text-purple-600 font-bold text-xl'>
            HelpMeWatch
        </span>
        <div className='text-orange-400 w-32 flex justify-between'>
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