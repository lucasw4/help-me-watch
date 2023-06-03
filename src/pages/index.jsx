import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@mui/material/Button';

const index = () => {
  return (
    <div className='h-screen bg-zinc-700'>
        <NavBar />
        <div className='h-1/4 w-full bg-zinc-400 flex text-zinc-900 justify-center py-4 px-1'>
          <h1 className='text-2xl text-center'>Get AI generated movie recommendations!</h1>
          <Button variant="contained">Test</Button>
        </div>
    </div>
  )
}

export default index