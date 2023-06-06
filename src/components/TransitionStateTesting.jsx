import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { TextField, } from '@mui/material';
import FilterState from '@/components/FilterState';

const TransitionStateTesting = ({filter, setFilter}) => {

    const [step, setStep] = useState(0)
    const [history, setHistory] = useState([])

    const handleNext = () => {
        if (step <= 3) {
            let currentStep = step;
            let incStep = currentStep += 1
            setStep(incStep)
            console.log(step)
        } else {
            console.log("Done")
        }
    }

  return (
    <div className='bg-zinc-600'>
        {step === 0 && (
            <div className='flex justify-between items-center mb-6'>
                <p>Get movie recommendations by:</p>
                <FilterState setFilter={setFilter} filter={filter}/>
                <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
            </div>
        )}
        {step === 1 && filter === "Vibe" ? (
            <div>
                <TextField id="vibe-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} FormHelperTextProps={{className: "text-white"}} label="Vibe" variant='filled' color="secondary" helperText="Enter the vibe of the movie you want" className='text-white'/> 
                <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
            </div>
        ) : (
        <div>
            <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
            'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 1" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
            <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
        </div>)}
        {step === 2 && filter === "Other Movies" ? (
            <div>
                <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
                'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 2" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
                <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
            </div>
        ) : (
        <div>
            <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
            'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Setting" variant='filled' color="secondary" helperText="Enter the setting you'd like the movie to take place in" className='text-white'/>
            <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
        </div>)}
        {step === 3 && filter === "Other Movies" ? (
        <div>
            <TextField id="other-movie-input" sx={{ input: { color: 'white' } }} fullWidth InputLabelProps={{className: "text-white"}} inputProps={{ className: 
            'bg-zinc-600 rounded-sm'}} FormHelperTextProps={{className: "text-white"}} label="Movie 1" variant='filled' color="secondary" helperText="Enter a name of another movie you like" className='text-white'/>
            <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
        </div>)
        : (
        <div>
            <h2>done</h2>
            <Button variant="contained" color='secondary' size='small' className='w-[50px] h-[50px]' onClick={handleNext}>Next</Button>
        </div>
        )}
    </div>
  )
}

export default TransitionStateTesting