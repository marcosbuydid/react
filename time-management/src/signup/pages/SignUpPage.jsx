import { NavLink } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import './SignUpPage.css';

const registerFormFields = {
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
}

export const SignUpPage = () => {

    const { name, email, password, repeatedPassword, onInputChange } = useForm(registerFormFields);

    const signUp = (event) => {
        event.preventDefault();
        console.log({ name, email, password, repeatedPassword })
    }

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