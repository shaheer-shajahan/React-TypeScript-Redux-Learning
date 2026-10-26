import { useState } from "react";
import initialTasks from "../data/tasks";
import TaskList from "./TaskList";

function TaskManager() {

    const [tasks, setTasks] = useState(initialTasks);

    // function addTask() {
    //     const newTask = {
    //         id: tasks.length + 1,
    //         title: `Task ${tasks.length + 1}`,
    //         status: "completed",
    //         priority: "high"
    //     }

    //     setTasks([...tasks, newTask]);
    // }

    // function resetTask() {
    //     setTasks(initialTasks);
    // }

    return(
        // <div className="card mb-3">
        //     <div className="card-header d-flex gap-2 align-items-center">
        //         <h5 className="mb-0">Task Manager</h5>

        //         <button className="btn btn-outline-secondary d-flex gap-2 ms-auto" onClick={resetTask}>
        //             <i className="bi bi-arrow-clockwise"></i> Reset
        //         </button>

        //         <button className="btn btn-primary d-flex gap-2" onClick={addTask}>
        //             <i className="bi bi-plus-lg"></i> Add Task
        //         </button>
        //     </div>
        //     <div className="card-body">
                
        //             <table className="table table-bordered mb-0">
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>Title</th>
        //                         <th>Status</th>
        //                         <th>Priority</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {tasks.map((task) => (
        //                     <tr key={tasks.id}>
        //                         <td>{task.id}</td>
        //                         <td>{task.title}</td>
        //                         <td>{task.status}</td>
        //                         <td>{task.priority}</td>
        //                     </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
               
        //     </div>
        // </div>

        <div className="container">
            <TaskList tasks={tasks} />
        </div>
    )
}

export default TaskManager;