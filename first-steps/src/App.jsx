import { useState, Fragment } from "react";
import PropTypes from 'prop-types';

export const App = ({ title, counter }) => {

    const [value, setValue] = useState(counter);

    const increment = () => {
        setValue(value + 1);
    }

    const decrement = () => {
        setValue(value - 1);
    }

    const reset = () => {
        setValue(0);
    }

    return (
        /*
        Fragments are used to group multiple elements together. 
        You can put multiple elements in any place where 
        a single element can go.
        */
        <Fragment>
            <h1>{title}</h1>
            <p>{value}</p>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </Fragment >
    );
}

//here we declare default props
App.defaultProps = {
    title: 'CounterApp',
    counter: 0,
}

//here we declare what type are the props we define
App.propTypes = {
    title: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
}