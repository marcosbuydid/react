import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    //we specify between [] the item that when change
    //call useEffect()

    useEffect(() => {
        console.log('username change');
    }, [username]);

    useEffect(() => {
        console.log('email change');
    }, [email]);



    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {(username === '') && <Message />}

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {(email === '') && <Message />}
        </>
    )
}
