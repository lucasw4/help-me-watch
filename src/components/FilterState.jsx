import React, {useState} from 'react'
import {InputLabel, Select, MenuItem} from '@mui/material';

const FilterState = ({filter, setFilter}) => {
    

  return (
    <div className='text-white'>
        <Select value={filter} color="secondary" className='text-white' sx={{
        color: 'white',
        '.MuiOutlinedInput-notchedOutline': {
            borderBottomColor: 'white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '.MuiSvgIcon-root ': {
            fill: "white !important",
          }
        
    }} variant='standard' onChange={(e) => {
            setFilter(e.target.value)
        }}>
            <MenuItem value="Other Movies" className=''>Other Movies</MenuItem>
            <MenuItem value="Vibe">Vibe</MenuItem>
        </Select>
    </div>
  )
}

export default FilterState