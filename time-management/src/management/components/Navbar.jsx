import { useAuthStore } from "../../hooks/useAuthStore"
import { AddEventButton } from '../components/AddEventButton';
import { DeleteEventButton } from '../components/DeleteEventButton';

export const Navbar = () => {

    const { logout } = useAuthStore();
    const user = localStorage.getItem('loggedUser');
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light 
        rounded mb-2 px-4 d-flex justify-content-end"
                style={{ backgroundColor: "#e3f2fd" }}>

                <DeleteEventButton />

                <AddEventButton />

                <span className="navbar-brand">
                    <i className="fa-solid fa-circle-user"></i>
                    &nbsp;
                    {user}
                </span>
                <button
                    className="btn btn-outline-primary"
                    onClick={logout}
                >
                    <i className="fas fa-signout-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
            <div className="d-flex justify-content-start">

            </div>

        </>
    )
}
