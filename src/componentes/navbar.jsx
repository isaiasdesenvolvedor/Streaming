import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
const [search, setsearch] = useState("")
const navite = useNavigate()

const handleSubmit = (e)=>{
e.preventDefault()
navite(`/search?q=${search}`)
}

return (
<div id="navbar">
<img width="30" id="icon" height="30" src="https://img.icons8.com/ios-glyphs/30/movie-projector.png" alt="movie-projector"/>
<form onSubmit={handleSubmit}>
<input value={search} onChange={(e)=> setsearch(e.target.value)} type="text" placeholder=" Digite..."></input>
<button type="submit" >buscar</button>

</form>

</div>
)
}