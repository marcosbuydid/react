
export const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light rounded mb-4 px-4" style={{ backgroundColor: "#e3f2fd" }}>
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Marcos
            </span>
            <button className="btn btn-outline-primary">
                <i className="fas fa-signout-alt"></i>
                <span>Logout</span>
            </button>
        </div>
    )
}
