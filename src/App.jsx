import tasks from "./data/tasks";

function App() {
    // Object 
    const student = {name: "Rahul",age: 22,course: "React", status: "Pending"};
    // const newTask = {id: 4, title: "Learn JavaScript", status: "pending", priority: "medium"};

    // Array 
    const courses = ["React","TypeScript","Redux"];
    
    // Get first task from tasks array
    const eachTask = tasks[0];

    // Since student is an OBJECT, don't use student[0]
    const task = student;

    // Array destructuring
    const firstCourse = courses[0];
    const thirdCourse = courses[2];

    // Object destructuring
    const {id, title, status, priority} = eachTask;
    const {name, course} = task;

    // Array Spread
    const updateCourses = [...courses, "html"];
    
    // Object Spread
    const studentInfo = {...student, status: "completed"};

    // Object Rest
    const {name: studentName, ...remainingInfo} = student;

    return(
        <div>
            <h5>Array Destructuring</h5>
            <h6>Name : {firstCourse}</h6>
            <p>Course : {thirdCourse}</p>
            <hr />

            <h5>Object Destructuring</h5>
            <h6>{title}</h6>
            <p>ID : {id}</p>
            <p>Status : {status}</p>
            <p>Priority : {priority}</p>
            <hr />

            <h6>Name : {name}</h6>
            <p>Course : {course}</p>
            <hr />

            <h5>Spread operators</h5>
            {updateCourses.map(course => (
                <p key={course}>Course : {course}</p>
            ))}
            <hr />

            <h2>Object Spread Operator</h2>
            <h4>Original Task</h4>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>Status: {student.status}</p>

            <h4>Updated Task</h4>
            <p>Name: {studentInfo.name}</p>
            <p>Age: {studentInfo.age}</p>
            <p>Course: {studentInfo.course}</p>
            <p>Status: {studentInfo.status}</p>

            <hr />

            <h2>Object Rest Operator</h2>
            <p>Student Name: {studentName}</p>
            <p>Age : {remainingInfo.age}</p>
            <p>Course : {remainingInfo.course}</p>
            <p>Status : {remainingInfo.status}</p>

        </div>
    );
}

export default App;


// const completedTask = tasks
//     .filter(task => task.completed)
//     .map(task => task.title);



// const completedCount = tasks.reduce((count, task) => {
//     if (task.completed) {
//         return count + 1
//     }

//     return count;
// }, 0);


// function Caa({id, title}) {
//     const completedTask = tasks.filter(task => task.completed);
//     const findTask = tasks.find(task => task.id === 3 );
//     const completeCount = tasks.reduce((count, task) => {
//         if (task.completed) {
//             return count + 1
//         }

//         return count;
//     }, 0)

//     return (
//       <div>
//         <h1>Task Management App</h1>

//         <h6>Find</h6>
//         <p>Category: {findTask.completed ? "Completed" : "Pending"}</p>

//         <h6>Completed Tasks</h6>
//         {completedTask.map(task => (
//             <div key={task.id}>
//                 <p>{task.title}</p>
//                 {/* <p>{completedTask}</p> */}
//             </div>
//         ))}

//         <h6>Complete count</h6>
//         <p>{completeCount}</p>

//         <div>
//             <p>{id}</p>
//             <h3>{title}</h3>
//         </div>
        
//       </div>
//     );
//   }
  
// export default Caa;

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