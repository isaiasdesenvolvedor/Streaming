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
<Link to ="/"><img id="icon" src="https://img.icons8.com/external-bearicons-flat-bearicons/64/external-Top-10-miscellany-texts-and-badges-bearicons-flat-bearicons.png" alt="external-Top-10-miscellany-texts-and-badges-bearicons-flat-bearicons"/></Link>
<form onSubmit={handleSubmit}>
<input value={search} onChange={(e)=> setsearch(e.target.value)} type="text" placeholder=" Digite..."></input>
<button type="submit" >buscar</button>

</form>

</div>
)
}