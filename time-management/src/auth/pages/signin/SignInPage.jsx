import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import './SignInPage.css';
import { useForm } from '../../../hooks/useForm';
import { useAuthStore } from "../../../hooks/useAuthStore";
import Swal from "sweetalert2";

const loginFormFields = {
    email: '',
    password: '',
}

export const SignInPage = () => {

    const { login, errorMessage } = useAuthStore();

    const { email, password, onInputChange } = useForm(loginFormFields);

    const signIn = (event) => {
        event.preventDefault();
        login({ email, password })
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Authentication error', errorMessage, 'error');
        }
    }, [errorMessage])


    return (
        <div className="container signin-container">

            <div className="signin-form-1">
                <h3>Sign In into your account</h3>
                <form onSubmit={signIn}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
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
                    <div className="form-group mb-2 d-flex justify-content-center mt-4">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Sign in"
                        />
                    </div>
                </form>
                <div className='d-flex justify-content-end'>
                    <NavLink to="/signup">
                        Create Account
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
