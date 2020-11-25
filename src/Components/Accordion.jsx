import React, { useState } from 'react'

export const Accordion = () => {
    const [isToggle, setIsToggle] = useState(false)
    return (
        <div>
            {
            isToggle && <h2>Show me!</h2>
            }
            <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
        </div>
    )
}
