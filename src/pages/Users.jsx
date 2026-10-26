import { Link } from "react-router-dom";
import users from "../data/users";

function Users() {
    return (
        <div className="container-fluid mb-3">
            <h3>Users List</h3>

            <div className="row">
                {users.map((user) => (
                <div className="col-4" key={user.id}>
                    <div className="card">
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title">{user.name}</h3>
                            <p className="mb-3">{user.role}</p>
                            <Link to={`/users/${user.id}`} className="btn btn-outline-primary">View Details</Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Users;