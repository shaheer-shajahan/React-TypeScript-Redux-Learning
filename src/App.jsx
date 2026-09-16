// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

// function App() {
//   const [countNumber, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((countNumber) => countNumber + 1)}
//         >
//           Count is {countNumber}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

const tasks =[
    {id: 1, title: "Learn React", completed: false},
    {id: 2, title: "Learn TypeScript", completed: false},
    {id: 3, title: "Build Todo App 1", completed: false},
    {id: 4, title: "Build Todo App 2", completed: true},
    {id: 5, title: "Build Todo App 3", completed: true},
    {id: 6, title: "Build Todo App 4", completed: true},
    {id: 7, title: "Build Todo App 5", completed: true},
    {id: 8, title: "Build Todo App 6", completed: true},
    {id: 9, title: "Build Todo App 7", completed: false},
    {id: 10, title: "Build Todo App 8", completed: false},
];

const completedTasks = tasks.filter(task => task.completed);
const pendingTasks = tasks.filter(task => !task.completed);
const result = tasks.find(task => task.id === 5);

const totalCompletedTasks = tasks.reduce((count, task) => {
    if (task.completed){
        return count + 1;
    }
    return count;
},0);


const completedTaskTitles = tasks
    .filter(task => task.completed)
    .map(task => task.title);



function App() {
    return (
        <div>
            <h1>Hello Shaheer</h1>
            <p>My First React Application</p>

            <h6>All Tasks</h6>
            {tasks.map(task => (
                <p>{task.title}</p>
            ))}
            <h6>Completed Tasks</h6>
            {completedTasks.map(task => (
                <p>{task.title}</p>
            ))}

            <h6>Pending Tasks</h6>
            {pendingTasks.map(task => {
                return <p>{task.title}</p>;
            })}

            <h6>find Tasks</h6>
            <p>{result.title}</p>

            <h6>Total Completed Tasks</h6>
            <p>{totalCompletedTasks}</p>

            <h6>Total Completed Tasks title</h6>
            <p>{completedTaskTitles}</p>
        </div>
  );
}

export default App;
