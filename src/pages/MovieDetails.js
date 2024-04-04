import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

const MovieDetails = () => {
const {id} = useParams()


  return (
    <div>
        <Navbar/>
      Movies Details {id}

      <Footer/>
    </div>
  )
}

export default MovieDetails