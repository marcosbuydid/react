import React, { useState, useCallback } from 'react'
import { Increment } from './Increment';


export const CallBack = () => {

    const [counter, setCounter] = useState(0);

    //useCallback  lets you cache a function definition between re-renders.
    const incrementCounter = useCallback(
        (value) => {
            setCounter((c) => c + value)
        },
        [],
    )

    return (
        <>
            <h1>Callback {counter}</h1>
            <hr />

            <Increment increment={incrementCounter} />

        </>
    )
}
