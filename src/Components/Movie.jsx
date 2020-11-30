import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Movie = ({ movie, config }) => {
    return (
        <div>
            <li>
                <Link to={`/movie/${movie.id}`}>
                    {config.images?.base_url && (
                        <img src={config.images.base_url + "w342" + movie.poster_path } alt={`${movie.title} Poster`}/>
                    )}
                    <h3> {movie.title} </h3>
                </Link>
            </li>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    })
}