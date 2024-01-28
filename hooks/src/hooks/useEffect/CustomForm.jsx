import { useForm } from "../useForm";

export const CustomForm = () => {

    const { formState, onInputChange, clearForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>CustomForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-4" onClick={() => clearForm()}> Clear all inputs</button>
        </>
    )
}