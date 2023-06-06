import React, {useState} from 'react'
import NavBar from '@/components/NavBar'
import Button from '@mui/material/Button';
import { Menu, TextField, } from '@mui/material';
import FilterState from '@/components/FilterState';
import OtherMovieInput from '@/components/OtherMovieInput';
import TransitionStateTesting from '@/components/TransitionStateTesting';

const index = ({filter, setFilter}) => {
  
  return (
    <div className='h-screen bg-zinc-700'>
        <NavBar />
        <div className='h-1/4 w-full bg-zinc-400 flex flex-col text-zinc-900 items-center justify-between py-4 px-1'>
          <h1 className='text-2xl text-center'>Get AI generated movie recommendations!</h1>
        </div>
        <div className='m-4 flex justify-center flex-col'>
          {/* <div className='flex justify-between items-center mb-6'>
            <p>Get movie recommendations by:</p>
            <FilterState setFilter={setFilter} filter={filter}/>
          </div>
          <form className='w-screen flex justify-center'>
            <div className='w-2/3 flex flex-col items-center'>
              {filter === "Vibe" ? (<TextField id="vibe-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} FormHelperTextProps={{className: "text-white"}} label="Vibe" variant='filled' color="secondary" helperText="Enter the vibe of the movie you want" className='text-white'/>) : (<OtherMovieInput />)}
              <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]'>Test</Button>
            </div>
          </form> */}
          <TransitionStateTesting filter={filter} setFilter={setFilter} />
        </div>
    </div>
  )
}

export default index