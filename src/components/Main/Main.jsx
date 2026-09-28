function Main() {
    return (
        <main className="flex-grow-1">

            <div className="container-fluid p-4">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">

                <div>
                    <h1 className="h3 mb-1">
                    Dashboard
                    </h1>

                    <p className="text-body-secondary mb-0">
                    Welcome back, Shaheer.
                    </p>
                </div>

                <div className="d-flex gap-2">

                    <button className="btn btn-outline-secondary">
                    <i className="bi bi-download me-1"></i>
                    Export
                    </button>

                    <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-1"></i>
                    Add New
                    </button>

                </div>

                </div>


                {/* <!-- Dashboard Cards --> */}
                <div className="row g-3 mb-4">

                <div className="col-12 col-sm-6 col-xl-3">

                    <div className="card h-100">
                    <div className="card-body">

                        <div className="d-flex justify-content-between">

                        <div>
                            <p className="text-body-secondary mb-1">
                            Students
                            </p>

                            <h3 className="mb-0">
                            1,250
                            </h3>
                        </div>

                        <div className="text-primary fs-3">
                            <i className="bi bi-people"></i>
                        </div>

                        </div>

                    </div>
                    </div>

                </div>


                <div className="col-12 col-sm-6 col-xl-3">

                    <div className="card h-100">
                    <div className="card-body">

                        <div className="d-flex justify-content-between">

                        <div>
                            <p className="text-body-secondary mb-1">
                            Courses
                            </p>

                            <h3 className="mb-0">
                            48
                            </h3>
                        </div>

                        <div className="text-success fs-3">
                            <i className="bi bi-book"></i>
                        </div>

                        </div>

                    </div>
                    </div>

                </div>


                <div className="col-12 col-sm-6 col-xl-3">

                    <div className="card h-100">
                    <div className="card-body">

                        <div className="d-flex justify-content-between">

                        <div>
                            <p className="text-body-secondary mb-1">
                            Attendance
                            </p>

                            <h3 className="mb-0">
                            92%
                            </h3>
                        </div>

                        <div className="text-warning fs-3">
                            <i className="bi bi-calendar-check"></i>
                        </div>

                        </div>

                    </div>
                    </div>

                </div>


                <div className="col-12 col-sm-6 col-xl-3">

                    <div className="card h-100">
                    <div className="card-body">

                        <div className="d-flex justify-content-between">

                        <div>
                            <p className="text-body-secondary mb-1">
                            Revenue
                            </p>

                            <h3 className="mb-0">
                            ₹2.4L
                            </h3>
                        </div>

                        <div className="text-info fs-3">
                            <i className="bi bi-currency-rupee"></i>
                        </div>

                        </div>

                    </div>
                    </div>

                </div>

                </div>


                {/* <!-- Dashboard Content --> */}
                <div className="row g-3">

                <div className="col-12 col-xl-8">

                    <div className="card h-100">

                    <div className="card-header bg-transparent">
                        <h5 className="mb-0">
                        Overview
                        </h5>
                    </div>

                    <div className="card-body">

                        <div
                        className="d-flex align-items-center justify-content-center bg-body-secondary rounded"
                        // style="height: 300px;"
                        >
                        Chart Area
                        </div>

                    </div>

                    </div>

                </div>


                <div className="col-12 col-xl-4">

                    <div className="card h-100">

                    <div className="card-header bg-transparent">
                        <h5 className="mb-0">
                        Recent Activity
                        </h5>
                    </div>

                    <div className="list-group list-group-flush">

                        <div className="list-group-item">
                        <div className="fw-semibold">
                            New student registered
                        </div>
                        <small className="text-body-secondary">
                            10 minutes ago
                        </small>
                        </div>

                        <div className="list-group-item">
                        <div className="fw-semibold">
                            Course updated
                        </div>
                        <small className="text-body-secondary">
                            30 minutes ago
                        </small>
                        </div>

                        <div className="list-group-item">
                        <div className="fw-semibold">
                            Attendance completed
                        </div>
                        <small className="text-body-secondary">
                            1 hour ago
                        </small>
                        </div>

                    </div>

                    </div>

                </div>

                </div>

            </div>

        </main>
    )
}

export default Main