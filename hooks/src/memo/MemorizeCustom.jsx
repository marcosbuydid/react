import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useState, useMemo } from 'react'

const bigteration = (iterNumber = 5000) => {
    for (let i = 0; i < iterNumber; i++) {
        console.log('Iteration process');
    }
    return `${iterNumber} iterations made`;
}

export const MemorizeCustom = () => {
    const { counter, increment } = useCounter(0);
    const [loaded, setLoaded] = useState(true);
    const memorizedValue = useMemo(() => bigteration(counter), [counter])

    const counterValidation = () => {
        console.log('Button pressed, counter should not change');
        setLoaded(!loaded);
    }

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{memorizedValue}</h4>
            <button
                className='btn btn-primary'
                onClick={() => increment(5000)}
            >
                Increment
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={() => counterValidation()}
            >
                Counter Validation
            </button>
        </>
    )
}