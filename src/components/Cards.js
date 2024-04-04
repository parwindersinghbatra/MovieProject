import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
const Cards = ({movie}) => {
  const {id} = useParams()
  return (
    <div className='flex justify-center'>
        <div className='border shadow'>
            <img src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        </div>
    </div>

    // <>
    //   <Carousel className="rounded-xl">
    //   <img
    //     src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
    //     alt={id}
    //     className="h-full w-full object-cover"
    //   />
    // </Carousel>
    // </>
  )
}

export default Cards
