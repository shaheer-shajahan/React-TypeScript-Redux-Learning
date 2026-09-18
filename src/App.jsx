import tasks from "./data/tasks";


// const tasks = [
//     {
//       id: 1,
//       title: "Learn React",
//       category: "React",
//       completed: true
//     },
//     {
//       id: 2,
//       title: "Learn TypeScript",
//       category: "TypeScript",
//       completed: false
//     },
//     {
//       id: 3,
//       title: "Learn Redux",
//       category: "Redux",
//       completed: false
//     },
//     {
//       id: 4,
//       title: "Build Todo App",
//       category: "JavaScript",
//       completed: true
//     },
//     {
//       id: 5,
//       title: "Practice JavaScript",
//       category: "JavaScript",
//       completed: false
//     }
// ];

const completedTask = tasks
    .filter(task => task.completed)
    .map(task => task.title);



const completedCount = tasks.reduce((count, task) => {
    if (task.completed) {
        return count + 1
    }

    return count;
}, 0);


function Caa() {
    const completedTask = tasks.filter(task => task.completed);
    const findTask = tasks.find(task => task.id === 3 );
    const completeCount = tasks.reduce((count, task) => {
        if (task.completed) {
            return count + 1
        }

        return count;
    }, 0)

    return (
      <div>
        <h1>Task Management App</h1>

        <h6>Find</h6>
        <p>Category: {findTask.completed ? "Completed" : "Pending"}</p>

        <h6>Completed Tasks</h6>
        {completedTask.map(task => (
            <div key={task.id}>
                <p>{task.title}</p>
                {/* <p>{completedTask}</p> */}
            </div>
        ))}

        <h6>Complete count</h6>
        <p>{completeCount}</p>
        
      </div>
    );
  }
  
export default Caa;

// function App() {
//     return(
//         <>
//             <h1>Task Management App</h1>

//             <h4>All Tasks is {tasks.length}</h4>
//             {tasks.map(task => (
//                 <p>{task.title}</p>
//             ))}

//             <h4>All complted tasks</h4>
//             {completedTask.map(task => (
//                 <p>{task.title}</p>
//             ))}

//             <h4>Find completedTask</h4>
//             <p>{findTask.title}</p>

//             <h4>Complete Task</h4>
//             <p>{completedCount}</p>

//             <h6>Total Completed Tasks title</h6>
//             <p>{completedTask}</p>

//         </>
//     )
// }

// export default App;