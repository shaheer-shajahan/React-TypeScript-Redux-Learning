import "./Header.scss"


function Header() {
    return(
        <header className="navbar navbar-expand-lg bg-body border-bottom sticky-top">
            <div className="container-fluid">
        
            {/* <!-- Sidebar Toggle --> */}
            <button
                className="btn btn-outline-secondary d-lg-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
                aria-controls="sidebar"
                aria-label="Toggle navigation"
            >
                <i className="bi bi-list"></i>
            </button>
        
            {/* <!-- Logo --> */}
            <a className="navbar-brand fw-semibold" href="#">
                Dashboard
            </a>
        
            {/* <!-- Header Right --> */}
            <div className="ms-auto d-flex align-items-center gap-2">
        
                {/* <!-- Search --> */}
                <form className="d-none d-md-flex" role="search">
                <div className="input-group">
                    <span className="input-group-text">
                    <i className="bi bi-search"></i>
                    </span>
                    {/* <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    > */}
                </div>
                </form>
        
                {/* <!-- Notification Dropdown --> */}
                <div className="dropdown">
        
                <button
                    className="btn btn-light position-relative"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Notifications"
                >
                    <i className="bi bi-bell fs-5"></i>
        
                    <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                    3
                    <span className="visually-hidden">unread notifications</span>
                    </span>
                </button>
        
                <div className="dropdown-menu dropdown-menu-end shadow">
                    <div className="dropdown-header d-flex justify-content-between">
                    <span>Notifications</span>
                    <span className="badge text-bg-primary">3 New</span>
                    </div>
        
                    <div className="dropdown-divider"></div>
        
                    <a className="dropdown-item" href="#">
                    <div className="d-flex gap-2">
                        <i className="bi bi-info-circle text-primary"></i>
                        <div>
                        <div className="fw-semibold">New assignment</div>
                        <small className="text-body-secondary">
                            You have a new assignment.
                        </small>
                        </div>
                    </div>
                    </a>
        
                    <a className="dropdown-item" href="#">
                    <div className="d-flex gap-2">
                        <i className="bi bi-check-circle text-success"></i>
                        <div>
                        <div className="fw-semibold">Task completed</div>
                        <small className="text-body-secondary">
                            Your task was completed.
                        </small>
                        </div>
                    </div>
                    </a>
        
                    <a className="dropdown-item" href="#">
                    <div className="d-flex gap-2">
                        <i className="bi bi-exclamation-circle text-warning"></i>
                        <div>
                        <div className="fw-semibold">Reminder</div>
                        <small className="text-body-secondary">
                            You have an upcoming event.
                        </small>
                        </div>
                    </div>
                    </a>
        
                    <div className="dropdown-divider"></div>
        
                    <a className="dropdown-item text-center text-primary" href="#">
                    View all notifications
                    </a>
                </div>
        
                </div>
        
        
                {/* <!-- Theme Dropdown --> */}
                <div className="dropdown">
        
                <button
                    className="btn btn-light"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Theme"
                >
                    <i className="bi bi-circle-half fs-5"></i>
                </button>
        
                <ul className="dropdown-menu dropdown-menu-end shadow">
        
                    <li>
                    <h6 className="dropdown-header">
                        Theme
                    </h6>
                    </li>
        
                    <li>
                    <button className="dropdown-item active" type="button">
                        <i className="bi bi-sun me-2"></i>
                        Light
                    </button>
                    </li>
        
                    <li>
                    <button className="dropdown-item" type="button">
                        <i className="bi bi-moon me-2"></i>
                        Dark
                    </button>
                    </li>
        
                    <li>
                    <button className="dropdown-item" type="button">
                        <i className="bi bi-circle-half me-2"></i>
                        System
                    </button>
                    </li>
        
                </ul>
        
                </div>
        
        
                {/* <!-- User Dropdown --> */}
                <div className="dropdown">
        
                <button
                    className="btn btn-light d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
        
                    <span
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    // style="width: 36px; height: 36px;"
                    >
                    SA
                    </span>
        
                    <span className="d-none d-md-block text-start">
                    <span className="d-block fw-semibold">
                        Shaheer
                    </span>
                    <small className="text-body-secondary">
                        Administrator
                    </small>
                    </span>
        
                    <i className="bi bi-chevron-down"></i>
        
                </button>
        
        
                <ul className="dropdown-menu dropdown-menu-end shadow">
        
                    <li>
                    <h6 className="dropdown-header">
                        My Account
                    </h6>
                    </li>
        
                    <li>
                    <a className="dropdown-item" href="#">
                        <i className="bi bi-person me-2"></i>
                        Profile
                    </a>
                    </li>
        
                    <li>
                    <a className="dropdown-item" href="#">
                        <i className="bi bi-gear me-2"></i>
                        Account Settings
                    </a>
                    </li>
        
                    <li>
                    <a className="dropdown-item" href="#">
                        <i className="bi bi-shield-check me-2"></i>
                        Security
                    </a>
                    </li>
        
                    <li>
                    {/* <hr className="dropdown-divider"> */}
                    </li>
        
                    <li>
                    <button className="dropdown-item text-danger" type="button">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </button>
                    </li>
        
                </ul>
        
                </div>
        
            </div>
        
            </div>
        </header>
    )
}

export default Header;