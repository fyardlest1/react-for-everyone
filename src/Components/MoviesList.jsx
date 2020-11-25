import React, {useState} from 'react'
import { Movie } from './Movie'
import { Filter } from './../Filter';

const movies = [
    {
      name: "From Dust Till Down"
    },
    {
      name: "Never Give Up"
    },
    {
      name: "Viol de Confiance"
    },
    {
      name: "Iron Man"
    },
  ]

const MoviesList = () => {
    const [filter, setFilter] = useState('')

    return (
        <div>
          <Filter filter={filter} setFilter={setFilter} />
            <ul>
                {movies.filter(movie => movie.name.toLowerCase().includes(filter)
                ).map(movie => (
                    <Movie key={movie.name} movie={movie} />
                  )
                )}
            </ul>
        </div>
    )
}

export default MoviesList
