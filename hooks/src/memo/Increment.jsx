import React from 'react'

export const Increment = ({ increment }) => {
    return (
        <button
            className='btn btn-primary'
            onClick={() => { increment(2) }}
        >
            Increment
        </button>
    )
}
