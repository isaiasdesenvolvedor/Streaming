import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Search } from './pages/search.jsx'
import { Home } from './pages/home.jsx'
import { Movie } from './pages/movie.jsx'
import { Navbar } from './componentes/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route  path='/'  element={<Home/>}/>
    <Route path='movie/:id' element={<Movie/>}/>
    <Route path='search' element={<Search/>}/>
  
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
