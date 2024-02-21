import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from "../../hooks/useAuthStore";
import './SignUpPage.css';
import Swal from "sweetalert2";

const signUpFormFields = {
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
}

export const SignUpPage = () => {

    const { errorMessage, register } = useAuthStore();

    const { name, email, password, repeatedPassword, onInputChange } = useForm(signUpFormFields);

    const signUp = (event) => {
        event.preventDefault();
        if (password !== repeatedPassword) {
            Swal.fire('Mismatch error', 'Passwords do not match', 'error');
            return;
        }
        register({ name: name, email: email, password: password });
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Register error', errorMessage, 'error');
        }
    }, [errorMessage])

    return (
        <div className="container signup-container">

            <div className="signup-form-2">
                <h3>Sign Up </h3>
                <div className='d-flex justify-content-start'>
                    <NavLink to="/*">
                        Back
                    </NavLink>
                </div>
                <form onSubmit={signUp}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            name="name"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            name="password"
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat Password"
                            value={repeatedPassword}
                            name="repeatedPassword"
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-group mb-2 d-flex justify-content-center mt-4">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Create Account" />
                    </div>
                </form>
            </div>
        </div>
    )
}