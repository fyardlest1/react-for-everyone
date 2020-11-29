import React from 'react'
import PropTypes from 'prop-types'

export const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <h2>Filter the list of movie</h2>
            <label htmlFor="">
                Search: 
                <input value={filter} onChange={(e) => setFilter(e.target.value)} />
          </label>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}
