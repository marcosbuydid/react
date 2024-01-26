import { Fragment } from "react";
import React from 'react';
import { useCounter } from "../hooks/useCounter";

export const CounterAppCustom = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <Fragment>
            <h1>Counter: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(2)}> Increase +1 </button>
            <button className="btn btn-primary" onClick={() => decrement(3)}> Decrease -1 </button>
            <button className="btn btn-primary" onClick={reset}> Reset </button>
        </Fragment >
    )
}