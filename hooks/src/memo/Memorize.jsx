import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';
import { useState } from 'react';

export const Memorize = () => {
    const { counter, increment } = useCounter(0);
    const [loaded, setLoaded] = useState(true);

    const counterValidation = () => {
        console.log('Button pressed, small component should not render');
        setLoaded(!loaded);
    }
    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => increment(1)}
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
