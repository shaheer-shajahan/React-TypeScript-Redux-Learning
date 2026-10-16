
function TaskList({ tasks }) {
    return (
      <div className="row g-3">
        {tasks.map(task => (
          <div className="col-md-4" key={task.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {task.title}
                </h5>
  
                <p className="card-text">
                  Status: {task.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default TaskList;
  