import React, { useState } from 'react'

export const Input = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <h3> {inputValue} </h3>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}
