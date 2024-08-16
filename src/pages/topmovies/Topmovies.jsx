import React, { useEffect, useState } from 'react'

export default function Topmovies({data,title}){

    const [movieList,setMovieList] = useState([])

    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/${data}?api_key=356253f83cbf22eabd5e5cec651db56e`)
        .then(res => res.json())
        .then(json =>setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
    },[]) 

    return(
        <>
        <div className='w-full'>
            <h1 className="font-bold text-2xl py-3 px-3">{title}</h1>
        </div>
        <div  className="flex space-x-4 overflow-x-auto hide-scrollbar ">
            {movieList.map((movie)=>(
            <img tabIndex='1' className="cursor-pointer rounded-3xl px-4 py-2 w-1/6 h-1/6" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        ))}</div>
        </>
    )
}