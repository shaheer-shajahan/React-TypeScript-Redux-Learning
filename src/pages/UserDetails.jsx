import { Link, useParams } from "react-router-dom";
import users from "../data/users";

function UserDetails() {

    const { id } = useParams();

    const user = users.find(
        (user) => user.id === Number(id)
    );

    if (!user) {
        return(
            <div className="d-block">
                <Link to="/users" className="btn btn-outline-primary">Back to Users</Link>
                <h2>User not found</h2>

            </div>
        );
    }

    return(
        <div className="container-fluid">
            <Link to="/users" className="btn btn-outline-primary">Back to Users</Link>
            <div className="card">
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{user.name}</h3>
                    <p className="mb-3">{user.role}</p>
                    <p className="mb-3">{user.email}</p>
                    <p className="mb-3">{user.department}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;