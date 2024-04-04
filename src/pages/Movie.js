import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import { NavLink } from 'react-router-dom'

const Movie = () => {
  return (
    <div>
      <Navbar/>
      <p>Movies</p>
      <NavLink to='/movies/5'>
      <Cards/>
      </NavLink>
    </div>
  )
}

export default Movie
