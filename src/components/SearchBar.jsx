import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [displayExtended, setDisplayExtended] = useState(false)

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
            setSearchResults(response.data["Search"])
        } catch(error) {
            console.log(error)
        }
    }

    const handleShowMore = function() {
      if (displayExtended !== true) {
        setDisplayExtended(true)
      } else {
        setDisplayExtended(false)
      }
    }

    useEffect(() => {
        if (searchInput !== "") {
          fetchMovies();
        } else {
          setSearchResults([]);
          setDisplayExtended(false)
        }
      }, [searchInput]);

  return (
    <div className='flex w-screen justify-center items-center'>
      <form id="search" className='flex flex-col justify-center items-center' onSubmit={handleMovieSearchSubmit}>
        <label htmlFor="search-input" className='text-purple-800'>Search</label>
        <input type='text' id="search-input" placeholder='search for a movie...' className='w-96 h-24 rounded-2xl text-black' value={searchInput} onChange={handleMovieSearchChange} />
        {searchResults && searchResults.length > 1 && (
            <div className='text-black w-72 h-36 bg-zinc-400 rounded-lg border-zinc-900 border-solid border p-1 flex'>
                {searchResults["Poster"] !== "N/A" &&(
                    <img alt={searchResults[0]["Title"]} src={searchResults[0]["Poster"]} height="75px" width="90px"/>
                )}
                <div className="w-full flex flex-col items-center justify-center px-1 text-center">
                    <h1 className=''>{searchResults[0]["Title"]}</h1>
                    <h2>Year</h2>
                    <h3>Rating</h3>
                    <button onClick={handleShowMore}>{displayExtended ? "Show Less" : "Show More"}</button>
                </div>
            </div>
        )}
        {displayExtended === true && searchResults && (
                searchResults.map((ele, i) => {
                  if (i <= 5) {
                    return (
                      <div key={i} className='text-black'>
                        <h1>{ele["Title"]}</h1>
                      </div>
                    )
                  }
                })
        )}
      </form>
    </div>
  );
}

export default SearchBar