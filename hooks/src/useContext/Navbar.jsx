import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light rounded" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/login">
                            Login
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
