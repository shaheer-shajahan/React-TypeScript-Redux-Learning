import { useState } from "react";

function TaskCounter() {
    const [count, setCount] = useState(0);

    return(
        <div className="row">
            <div className="col-12 mb-3">
                <div className="card h-100">
                    <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Task Counter</h5>
                        <div className="ms-auto d-flex gap-3">
                            <button className="btn btn-danger d-flex gap-2"
                                onClick={()=> {
                                    if (count>0) {
                                        setCount(count-1);
                                    }
                                }}
                                >
                                <i className="bi bi-dash-lg"></i> Delete Task
                            </button>
                            <button className="btn btn-primary d-flex gap-2"
                                onClick={()=> {
                                    if (count < 5) {
                                        setCount(count + 1);
                                    }
                                }}
                                >
                                <i className="bi bi-plus-lg"></i> Add Task
                            </button>
                            <button className="btn btn-outline-secondary d-flex gap-2"
                                onClick={()=> {
                                    setCount(0);
                                }}
                                >
                                <i className="bi bi-arrow-clockwise"></i> Reset
                            </button>
                        </div>
                        
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <h5>{count} Tasks</h5>
                        {count === 0 && (
                            <p>No Task</p>
                        )}

                        {count > 0 && count < 5 && (
                            <p>Tasks in progress</p>
                        )}
                        
                        {count === 5 && (
                            <p>Task Completed</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCounter;