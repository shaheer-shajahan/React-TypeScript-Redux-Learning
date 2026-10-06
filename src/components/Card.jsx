function UserCard({title, value, icon}) {
    return (
        // <div className="card">
        //     <div className="card-body">
        //         <h5 className="card-title">{name}</h5>
        //         <p className="card-text">{role}</p>
        //         <p className="card-text">{email}</p>
        //     </div>
        // </div>

        <div className="card h-100">
            <div className="card-body">

                <div className="d-flex justify-content-between">
                    <div>
                        <p className="text-body-secondary mb-1">{title}</p>
                        <h3 className="mb-0">{value}</h3>
                    </div>

                    <div className="text-primary fs-3">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;