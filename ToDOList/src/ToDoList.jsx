import React, { useState } from "react";

function ToDOList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
    const [darkMode, setDarkMode] = useState(false);


    function InputChange(e) {
        setNewTask(e.target.value);
    }

    function showMessage(text, type = "info") {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: "", type: "" }), 2000);
    }

    function AddTask() {
        if (newTask.trim() === "") {
            showMessage("Please enter a task.", "error");
            return;
        }
        setTasks((t) => [...t, newTask]);
        setNewTask("");
        showMessage("Task added successfully!", "success");
    }

    function DeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        showMessage("Task deleted!", "warning");
    }

    function MakeTaskTOTop(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            let temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
            showMessage(`Moved ${updatedTasks[index]} task up!`, "info");
        }
    }

    function MakeTaskToBottom(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            let temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
            showMessage(`Moved ${updatedTasks[index]} task down!`, "info");
        }
    }

    return (
        <div className={`todo-container ${darkMode ? "dark" : ""}`}>
            <h1>📝 My To-Do List</h1>
            <button onClick={()=>setDarkMode(bef=>!bef)} className="dark-toggle">
                {darkMode ? "☀️" : "🌙"}
            </button>

            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.text}
                </div>
            )}

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={InputChange}
                />
                <button className="add-button" onClick={AddTask}>
                    ➕ Add
                </button>
            </div>

            <ol className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span>{task}</span>
                        <div className="actions">
                            <button onClick={() => MakeTaskTOTop(index)}>⬆️</button>
                            <button onClick={() => MakeTaskToBottom(index)}>⬇️</button>
                            <button onClick={() => DeleteTask(index)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDOList;


// import React,{useState} from "react";
// function ToDOList(){

//     const [tasks,setTasks]=useState([])
//     const [newTask,setNewTask]=useState("")
//     let [errorMes,setErrorMessage]=useState("")
    

//     //for input in text box
//     function InputChange(e){
//         setNewTask(e.target.value)
//     }
//     //to add a new Task
//     function AddTask(){
//         if(newTask.trim()===""){
//             setErrorMessage("Enter a task.");
//             return
//         }
//         setTasks(t=>[...t,newTask])
//         setNewTask("")
//         setErrorMessage("")
//     }
//     //delete Task
//     function DeleteTask(index){
//         const updatedTasks =tasks.filter((_,i)=>i!==index)
//         setTasks(updatedTasks)
//     }
     
//     function MakeTaskTOTop(index){
//         if(index>0){
//             const updatedTasks=[...tasks]
//             let temp=updatedTasks[index]
//             updatedTasks[index]=updatedTasks[index-1]
//             updatedTasks[index-1]=temp

//             setTasks([...updatedTasks])
//         }
//     }

//     function MakeTaskToBottom(index){
//          if(index<tasks.length-1){
//             const updatedTasks=[...tasks]
//             let temp=updatedTasks[index]
//             updatedTasks[index]=updatedTasks[index+1]
//             updatedTasks[index+1]=temp

//             setTasks([...updatedTasks])
//         }
//     }

// return(
//     <div className="to-do-list">
//         <h1>To Do List</h1>
//         <div>
//             {errorMes && <p style={{color:"red"}}>{errorMes}</p> }
//             <input type="text"
//                     placeholder="Enter a new Task..."
//                     value={newTask}
//                     onChange={InputChange}/>
//             <button className="add-button"
//                     onClick={AddTask}>
//                 Add
//             </button>
//         </div>
//         <ol>
//             {tasks.map((task,index)=>
//                 <li key={index}>
//                     <span className="text">{task}</span>
//                     <button className="delete-button" 
//                             onClick={()=>DeleteTask(index)}>
//                             Delete</button>
//                     <button className="move-button" 
//                             onClick={()=>MakeTaskTOTop(index)}>
//                             Move Up
//                     </button>
//                     <button className="move-button" 
//                             onClick={()=>MakeTaskToBottom(index)}>
//                             Move Down
//                     </button>
//                 </li>
//             )}
//         </ol>
//     </div>
// )
// }

// export default ToDOList