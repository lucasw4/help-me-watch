import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleMovieSearchSubmit = function(e) {
        e.preventDefault();
        fetchMovies();
    }

    const handleMovieSearchChange = function(e) {
        setSearchInput(e.target.value)
    }

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${searchInput}&apikey=f2939784&page=1`)
            setSearchResults(response.data["Search"][0])
            console.log(searchResults)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (searchInput !== "") {
          fetchMovies();
        } else {
          setSearchResults([]);
        }
      }, [searchInput]);

  return (
    <div className='flex w-screen justify-center items-center'>
      <form id="search" className='flex flex-col justify-center items-center' onSubmit={handleMovieSearchSubmit}>
        <label htmlFor="search-input" className='text-purple-800'>Search</label>
        <input type='text' id="search-input" placeholder='search for a movie...' className='w-96 h-24 rounded-2xl text-black' value={searchInput} onChange={handleMovieSearchChange} />
        {searchResults && (
            <div className='text-black w-72 h-36 bg-zinc-400 rounded-lg border-zinc-900 border-solid border p-1 flex'>
                {searchResults["Poster"] !== "N/A" &&(
                    <img alt={searchResults["Title"]} src={searchResults["Poster"]} height="75px" width="90px"/>
                )}
                <div className="w-full flex flex-col items-center justify-center px-1 text-center">
                    <h1 className=''>{searchResults["Title"]}</h1>
                    <h2>Year</h2>
                    <h3>Rating</h3>
                </div>
            </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar