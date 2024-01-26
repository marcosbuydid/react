import { Fragment, useState } from "react";
import React from 'react';

export const CounterApp = () => {

    const [counter, setCounter] = useState(0)
    return (
        <Fragment>
            <h1>Counter: {counter} </h1>
            <hr />
            <button className="btn" onClick={() => setCounter(counter + 1)}> Increase +1 </button>
            <button className="btn" onClick={() => setCounter(counter - 1)}> Decrease -1 </button>
        </Fragment >
    )
}