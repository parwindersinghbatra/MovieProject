import React, { useEffect } from 'react'
import { useSelector} from 'react-redux'
import { fetchApi } from "../utils/api";
import Cards from "../components/Cards";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTopRated } from "../slice/movieSlice";
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

const TrendingMovie = () => {
    const dispatch= useDispatch()

    const topRatedMovies  = useSelector((state) => state.movieSlice.topRated)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    
      async function GetData() {
        const data = await fetchApi(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            },
          }
        );
        dispatch(setTopRated(data.data.results));
        console.log(data.data.results);
      }
      useEffect(() => {
        GetData();
      }, []);

  return (
    <div>
     
<ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {
        topRatedMovies.map((movie) => {
           return (
            <div style={{
                width:'12rem'
            }}>
            <NavLink key={movie.id} to={`/movies/${movie.id}`}>
              <Cards movie = {movie}/>
            </NavLink>       
            </div>
           ) 
        })
      }
      </ReactSimplyCarousel>


    </div>
  )
}

export default TrendingMovie
