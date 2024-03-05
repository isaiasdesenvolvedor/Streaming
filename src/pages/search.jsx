import React from "react"
import { Navbar } from "../componentes/navbar"
import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../componentes/moviecard"

export const Search = ()=>{
    
const [SearchParams] = useSearchParams()

const [movies100,setmovies100] = useState([])
const query = SearchParams.get("q");

const getTopMovies = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    setmovies100(data.results)
    console.log(data.results)
    
}

    useEffect(()=>{
        const movies10 = `https://api.themoviedb.org/3/search/movie?api_key=cd8b00398db94b3f75006374b812bfdc&query=${query}`
        getTopMovies(movies10)
        
        },[query])
    
  

return (
<>

<Navbar/>
<ul> 
{movies100.map((content)=>{
return  (
<MovieCard key={content.id} movie={content}/>

)})}
</ul>
</>
)
}