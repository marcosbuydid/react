import { Fragment } from "react";
import PropTypes from 'prop-types';

export const App = ({ propOne, propTwo }) => {
    return (
        /*
        Fragments are used to group multiple elements together. 
        You can put multiple elements in any place where 
        a single element can go.
        */
        <Fragment>
            <h1>{propOne}</h1>
            <p>{propTwo}</p>
        </Fragment>
    );
}

//here we declare what type are the props we define
App.propTypes = {
    propOne: PropTypes.string.isRequired,
    propTwo: PropTypes.any,
}