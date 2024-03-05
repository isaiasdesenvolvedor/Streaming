import React from "react"
import { useState,useEffect } from "react"
import { List } from "antd" 
import { MovieCard } from "../componentes/moviecard"
import { Navbar } from "../componentes/navbar"


const key =    "cd8b00398db94b3f75006374b812bfdc"
const site =   "https://api.themoviedb.org/3/movie/"
const searchs = "https://api.themoviedb.org/3/search/movie/"
const image =  "https://image.tmdb.org/t/p/w500/"

export const Home = ()=>{
const [topmovie,setopmovie] = useState([])

useEffect(()=>{

const topratedurl = "https://api.themoviedb.org/3/movie/top_rated?api_key=cd8b00398db94b3f75006374b812bfdc"
getTopRatedMovies(topratedurl)

})
 const getTopRatedMovies = async (url) =>{
const res = await fetch(url);
const data = await res.json();
setopmovie(data.results)
console.log(data)
}

return (
<> 
<Navbar/>
<ul> 
{topmovie.map((content)=>{
return <MovieCard key={content.id} movie={content} />
})}
</ul></>)}


