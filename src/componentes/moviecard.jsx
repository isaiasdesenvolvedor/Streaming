import { Link } from "react-router-dom";
const image =  "https://image.tmdb.org/t/p/w500/"


export const MovieCard = ({movie, showlink = true}) =>{
return (
<div id="movie-card"> 
<Link to={`/movie/${movie.id}`}> <img id="mova" src={image + movie.poster_path}></img></Link>
<h3> <span id="title">{movie.title}</span></h3>


</div>

)

}