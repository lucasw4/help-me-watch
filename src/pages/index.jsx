import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const index = () => {
  return (
    <div className='h-screen bg-zinc-700'>
        <NavBar />
        <div className='h-1/4 w-full bg-zinc-400 flex flex-col text-zinc-900 items-center justify-between py-4 px-1'>
          <h1 className='text-2xl text-center'>Get AI generated movie recommendations!</h1>
        </div>
        <div className='m-4 flex justify-center'>
          <form className=' w-2/3'>
            <TextField id="vibe-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} FormHelperTextProps={{className: "text-white"}} label="Vibe" variant='filled' color="secondary" helperText="Enter the vibe of the movie you want" className='text-white'/>
            <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]'>Test</Button>
          </form>
        </div>
    </div>
  )
}

export default index