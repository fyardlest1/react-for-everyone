import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_URL = '?api_key=1d8a5b8800903f3add9a06720fcf8962'

const IMAGE_URL = 'http://image.tmdb.org/t/p/'
const BACKDROP_SIZE = 'original'
const POSTER_SIZE = 'w342'

export const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        try {
          const res = await fetch(BASE_URL + id + API_URL)
        //   `${BASE_URL}${id}${API_URL}` BASE_URL + id + API_URL
          const newMovie = await res.json()
          setMovie(newMovie)
        } catch (e) {
          console.error(e)
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    if (!movie.title) return null

    return (
        <div>
          <img 
            className='backdrop' 
            src={`${IMAGE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`} 
            alt={`${movie.title} Backdrop`} />
          <div className="detail-details">
            <img 
              className='detail-poster' 
              src={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`} 
              alt={`${movie.title} Poster`} 
            />
            <div>
              <h1> {movie.title} </h1>
              <p> {movie.overview} </p>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    )
}
