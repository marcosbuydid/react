import { NavLink } from "react-router-dom"
import './SignInPage.css';

export const SignInPage = () => {
    return (
        <div className="container signin-container">

            <div className="signin-form-1">
                <h3>Sign In into your account</h3>
                <form>
                    <div className="form-group mb-2">
                        <input
                            type="text"
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
