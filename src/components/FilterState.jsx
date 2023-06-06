import React, {useState} from 'react'
import {InputLabel, Select, MenuItem} from '@mui/material';

const FilterState = ({filter, setFilter}) => {
    

  return (
    <div className='text-white'>
        <Select value={filter} onChange={(e) => {
            setFilter(e.target.value)
        }}>
            <MenuItem value="Other Movies">Other Movies</MenuItem>
            <MenuItem value="Vibe">Vibe</MenuItem>
        </Select>
    </div>
  )
}

export default FilterState