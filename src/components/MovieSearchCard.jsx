import React from 'react'

const MovieSearchCard = ({movieObject}) => {
  return (
    <div className='text-black'>{movieObject.Title}</div>
  )
}

export default MovieSearchCard