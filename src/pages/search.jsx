import React from 'react'
import SearchBar from '@/components/SearchBar'
import NavBar from '@/components/NavBar'

const search = () => {
  return (
    <div className='h-screen bg-zinc-700'>
        <NavBar />
        <SearchBar />
    </div>
  )
}

export default search