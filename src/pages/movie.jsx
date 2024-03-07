import React, { useState } from "react"
import { Navbar } from "../componentes/navbar"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {  Rate } from 'antd';



export const Movie = ()=>{

const image =  "https://image.tmdb.org/t/p/w500/"
const {id} = useParams()
const  [movies,setmovies] = useState(null)

const getTopMovie = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    setmovies(data)
    
   

}
 

    useEffect(()=>{

        const topratedurl = `https://api.themoviedb.org/3/movie/${id}?api_key=cd8b00398db94b3f75006374b812bfdc`
        getTopMovie(topratedurl)
      
        
        },[id])
    

return (
<>
<Navbar/>

<div id="movie">
{movies && <>
<h2 id="androidtittle">{movies.title}</h2>
{<img id="poster" src={`${image}${movies.poster_path}`}></img>}
{<div id="posterRight" >  
<h1 id="pctitle">{movies.title}</h1>
< br className="blockdroid"/> <br id="blockdroid"/>
<p className="ojuju"> {movies.overview}</p>
<br/><br/>
<span className="ojuju">Tempo de duração: {movies.runtime} minutos</span>
<br/> <br/>
<span><Rate allowHalf disabled defaultValue={movies.vote_average/ 2} id="voto"/></span>
{console.log(movies.vote_average/ 2)}
</div>}

</>}

</div>
</>

)
}