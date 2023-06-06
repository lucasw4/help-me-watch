import '../app/globals.css'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {

  const [filter, setFilter] = useState("Other Movies")

  return <Component {...pageProps}  filter={filter} setFilter={setFilter}/>
}

export default MyApp
