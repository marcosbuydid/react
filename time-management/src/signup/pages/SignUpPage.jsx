import { NavLink } from "react-router-dom";
import './SignUpPage.css';

export const SignUpPage = () => {
    return (
        <div className="container signup-container">

            <div className="signup-form-2">
                <h3>Sign Up </h3>
                <div className='d-flex justify-content-start'>
                    <NavLink to="/*">
                        Back
                    </NavLink>
                </div>
                <form>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat Password"
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