import React from 'react'
import { TextField } from '@mui/material'


const OtherMovieInput = () => {
  return (
    <div className=''>
        <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
        'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 1" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
        <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
        'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 2" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
        <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
        'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 3" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
    </div>
  )
}

export default OtherMovieInput