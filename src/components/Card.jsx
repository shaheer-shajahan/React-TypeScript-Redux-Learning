// function UserCard({title, value, icon}) {
//     return (
//         <div className="card h-100">
//             <div className="card-body">

//                 <div className="d-flex justify-content-between">
//                     <div>
//                         <p className="text-body-secondary mb-1">{title}</p>
//                         <h3 className="mb-0">{value}</h3>
//                     </div>

//                     <div className="text-primary fs-3">
//                         <i className={icon}></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


function UserCard({tasks}) {
    return (
        <div className="row g-3 mb-4">
            {tasks.map(task => {
                <div className="col-12 col-sm-6 col-xl-3" key={task.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-body-secondary mb-1">{task.title}</p>
                                    <h3 className="mb-0">{task.value}</h3>
                                </div>

                                <div className="text-primary fs-3">
                                    <i className={task.icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default UserCard;