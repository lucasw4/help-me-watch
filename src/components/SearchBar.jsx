import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [displayExtended, setDisplayExtended] = useState(false)
    const [hide, setHide] = useState(false)

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
            console.log(searchResults[0])
        } catch(error) {
            console.log(error)
        }
    }

    const handleShowMore = function() {
      if (displayExtended !== true) {
        setDisplayExtended(true)
        setHide(true)
      } else {
        setDisplayExtended(false)
        setHide(false)
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
    <div className='flex w-screen justify-center items-center bg-zinc-700 pb-5'>
      <form id="search" className='flex flex-col justify-center items-center' onSubmit={handleMovieSearchSubmit}>
        <label htmlFor="search-input" className='text-zinc-200 my-4 text-xl'>Search Movies</label>
        <input type='text' id="search-input" placeholder='search for a movie...' className='w-96 h-24 rounded-2xl text-black mb-2 p-4' value={searchInput} onChange={handleMovieSearchChange} />
        {!hide && searchResults && searchResults.length > 1 && (
            <div className='text-black w-96 h-36 bg-stone-300 rounded-lg border-zinc-900 border-solid border p-1 flex'>
                {searchResults["Poster"] !== "N/A" && (
                    <img alt={searchResults[0]["Title"]} src={searchResults[0]["Poster"]} height="75px" width="90px"/>
                )}
                <div className="w-full flex flex-col items-center justify-center px-1 text-center">
                    <h1 className='font-semibold text-lg'>{searchResults[0]["Title"]}</h1>
                    <h2>{searchResults[0].Year}</h2>
                    <h3>8.6</h3>
                    <button onClick={handleShowMore} className='text-orange-600 transition-all hover:text-purple-500 hover:scale-110'>{displayExtended ? "Show Less" : "Show More"}</button>
                </div>
            </div>
        )}
        {displayExtended === true && searchResults && (
                searchResults.map((ele, i) => {
                  if (i <= 5) {
                    return (
                      <div key={i} className='text-black w-96 h-36 bg-stone-400 rounded-lg border-zinc-900 border-solid border p-1 flex -mx-6 mb-2'>
                        {ele["Poster"] !== "N/A" ? <img alt={ele["Title"]} src={ele["Poster"]} height="75px" width="90px"/> : <div className='h-[75px] w-[90px]'>No Image Available</div>}
                          <div className="w-full flex flex-col items-center justify-center px-1 text-center">
                            <h1 className='text-lg font-semibold'>{ele["Title"]}</h1>
                            <h2>{ele.Year}</h2>
                            <div className='flex justify-between w-1/4'>
                              <button className='text-orange-600 transition-all hover:text-purple-500 hover:scale-110'>+</button>
                              <a target="_blank" href={`https://www.imdb.com/title/${ele.imdbID}/`} className='text-orange-600 transition-all hover:text-purple-500 hover:scale-110'>IMDB</a>
                            </div>
                          </div>
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