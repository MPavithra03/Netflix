import React from 'react';
import  { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topmovies from '../topmovies/Topmovies';



const Home = () => { 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
   
  };

const [movieList,setMovieList] = useState([])

const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=356253f83cbf22eabd5e5cec651db56e")
    .then(res => res.json())
    .then(json =>setMovieList(json.results))
}

useEffect(()=>{
    getMovie()
},[])
 
  return (
    <div >
      <Slider arrows={false} {...settings}>
              {movieList?.map((movie)=>{
                return(
                   <>
                  <div className="relative text-white object-contain h-[670px] w-full bg-cover ">
                  
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="object-cover h-full w-full brightness-50 " />
                    
                    <div className="absolute bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent w-full"/>
                    <div className="absolute top-0 h-48 bg-gradient-to-b from-zinc-950 to-transparent w-full" />
                    <div className="absolute  inset-0 bg-black bg-opacity-50 w-full" />
                    <div class="absolute w-3/5 top-1/2 left-4 text-white text-4xl p-4 z-10">
                      <h1 className=" w-auto text-5xl text-white font-bold pb-4">
                        {movie?.title || movie?.name || movie?.original_name}
                      </h1>
                      <h1 className=" w-auto pb-4 leading-5 pt-4 text-xl">
                        {movie?.overview}
                      </h1>
                      <div className="flex space-x-8">
                        <button className=' bg-red-800 w-24 h-10 text-white text-lg font-bold  rounded hover:bg-grey-700 transition'>
                          Play
                        </button>
                        <button className='bg-red-800 w-24 h-10 text-white text-lg font-bold rounded hover:bg-grey-700 transition'>
                          +Mylist
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  </>
                )
                 })} 
              </Slider>
      <Topmovies data={'movie/top_rated'} title={'Top Rated'}/> 
      <Topmovies data={'tv/popular'} title={'TV Series'}/>
      <Topmovies data={'movie/upcoming'} title={'Upcoming'}/>
      <Topmovies data={'tv/airing_today'} title={'Airing Today'}/>   

  </div> 
     
  )
  
}

export default Home ;