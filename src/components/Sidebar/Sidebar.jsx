function Sidebar() {
    return (
        <aside
            className="offcanvas-lg offcanvas-start border-end"
            tabindex="-1"
            id="sidebar"
            aria-labelledby="sidebarLabel"
            // style="width: 280px;"
            >

            {/* <!-- Mobile Sidebar Header --> */}
            <div className="offcanvas-header border-bottom">

                <h5 className="offcanvas-title" id="sidebarLabel">Navigation</h5>

                <button
                    type="button"
                    className="btn-close d-lg-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#sidebar"
                    aria-label="Close">
                </button>

            </div>

            {/* <!-- Sidebar Content --> */}
            <div className="offcanvas-body d-flex flex-column p-3">

                {/* <!-- User / Workspace --> */}
                <div className="dropdown mb-3">

                <button
                    className="btn btn-light border w-100 d-flex align-items-center justify-content-between"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="d-flex align-items-center gap-2">
                        <span className="rounded bg-primary text-white d-flex align-items-center justify-content-center" // style="width: 32px; height: 32px;"
                        >CD</span>
                        <span className="text-start">
                            <span className="d-block fw-semibold"> Company Dashboard</span>
                            <small className="text-body-secondary">Workspace</small>
                        </span>
                    </span>
                    <i className="bi bi-chevron-down"></i>
                </button>

                <ul className="dropdown-menu w-100">
                    <li><a className="dropdown-item" href="#">Workspace 1</a></li>
                    <li><a className="dropdown-item" href="#">Workspace 2</a></li>
                </ul>

            </div>


                {/* <!-- Main Navigation --> */}
            <nav className="nav nav-pills flex-column gap-1">

                {/* <!-- Dashboard --> */}
                <a
                    href="#"
                    className="nav-link active d-flex align-items-center gap-2"
                    aria-current="page"
                >
                    <i className="bi bi-grid"></i>
                    Dashboard
                </a>


                {/* <!-- Level 1 --> */}
                <div>

                    <button
                    className="nav-link text-body w-100 d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#academicMenu"
                    aria-expanded="true"
                    aria-controls="academicMenu"
                    >

                    <i className="bi bi-mortarboard"></i>

                    <span className="flex-grow-1 text-start">
                        Academic
                    </span>

                    <i className="bi bi-chevron-down small"></i>

                    </button>


                    {/* <!-- Level 2 --> */}
                    <div
                    className="collapse show"
                    id="academicMenu"
                    >

                    <nav className="nav flex-column ms-4 mt-1">

                        <a className="nav-link text-body" href="#">
                        Courses
                        </a>

                        <a className="nav-link text-body" href="#">
                        Subjects
                        </a>


                        {/* <!-- Level 3 --> */}
                        <div>

                        <button
                            className="nav-link text-body w-100 d-flex align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#courseManagement"
                            aria-expanded="false"
                            aria-controls="courseManagement"
                        >

                            <span className="flex-grow-1 text-start">
                            Course Management
                            </span>

                            <i className="bi bi-chevron-down small"></i>

                        </button>


                        <div
                            className="collapse"
                            id="courseManagement"
                        >

                            <nav className="nav flex-column ms-3">

                            <a className="nav-link text-body small" href="#">
                                Course List
                            </a>

                            <a className="nav-link text-body small" href="#">
                                Course Categories
                            </a>

                            <a className="nav-link text-body small" href="#">
                                Course Settings
                            </a>

                            </nav>

                        </div>

                        </div>

                    </nav>

                    </div>

                </div>


                {/* <!-- Students --> */}
                <div>

                    <button
                    className="nav-link text-body w-100 d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#studentMenu"
                    aria-expanded="false"
                    aria-controls="studentMenu"
                    >

                    <i className="bi bi-people"></i>

                    <span className="flex-grow-1 text-start">
                        Students
                    </span>

                    <i className="bi bi-chevron-down small"></i>

                    </button>


                    <div
                    className="collapse"
                    id="studentMenu"
                    >

                    <nav className="nav flex-column ms-4">

                        <a className="nav-link text-body" href="#">
                        Student List
                        </a>

                        <a className="nav-link text-body" href="#">
                        Admissions
                        </a>

                        {/* <!-- Level 3 --> */}
                        <div>

                        <button
                            className="nav-link text-body w-100 d-flex align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#studentReports"
                            aria-expanded="false"
                            aria-controls="studentReports"
                        >

                            <span className="flex-grow-1 text-start">
                            Reports
                            </span>

                            <i className="bi bi-chevron-down small"></i>

                        </button>

                        <div
                            className="collapse"
                            id="studentReports"
                        >

                            <nav className="nav flex-column ms-3">

                            <a className="nav-link text-body small" href="#">
                                Attendance Report
                            </a>

                            <a className="nav-link text-body small" href="#">
                                Performance Report
                            </a>

                            <a className="nav-link text-body small" href="#">
                                Academic Report
                            </a>

                            </nav>

                        </div>

                        </div>

                    </nav>

                    </div>

                </div>


                {/* <!-- Attendance --> */}
                <a
                    href="#"
                    className="nav-link text-body d-flex align-items-center gap-2"
                >
                    <i className="bi bi-calendar-check"></i>
                    Attendance
                </a>


                {/* <!-- Timetable --> */}
                <a
                    href="#"
                    className="nav-link text-body d-flex align-items-center gap-2"
                >
                    <i className="bi bi-calendar3"></i>
                    Timetable
                </a>


                {/* <!-- Settings --> */}
                <div>

                    <button
                    className="nav-link text-body w-100 d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#settingsMenu"
                    aria-expanded="false"
                    aria-controls="settingsMenu"
                    >

                    <i className="bi bi-gear"></i>

                    <span className="flex-grow-1 text-start">
                        Settings
                    </span>

                    <i className="bi bi-chevron-down small"></i>

                    </button>


                    <div
                    className="collapse"
                    id="settingsMenu"
                    >

                    <nav className="nav flex-column ms-4">

                        <a className="nav-link text-body" href="#">
                        General Settings
                        </a>

                        <a className="nav-link text-body" href="#">
                        User Management
                        </a>

                        <a className="nav-link text-body" href="#">
                        Permissions
                        </a>

                    </nav>

                    </div>

                </div>

                </nav>


                {/* <!-- Sidebar Bottom --> */}
                <div className="mt-auto pt-3">

                <hr/>

                <a
                    href="#"
                    className="nav-link text-body d-flex align-items-center gap-2"
                >
                    <i className="bi bi-question-circle"></i>
                    Help & Support
                </a>

                </div>

            </div>

        </aside>
    )
}

export default Sidebar