import React from 'react'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'

const index = () => {
  return (
    <div className='h-screen bg-zinc-700'>
        <NavBar />
        <SearchBar />
    </div>
  )
}

export default index