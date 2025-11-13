import React, { useEffect, useState } from "react";

function ToDOList() {
    const [tasks, setTasks] = useState(()=>{
        return JSON.parse(localStorage.getItem('tasks'))||[]
    });
    const [newTask, setNewTask] = useState("");
    // const [count,setCount]=useState(0)
    const [message, setMessage] = useState({ text: "", type: "" });
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    function InputChange(e) {
        setNewTask(e.target.value);
    }
    // console.log(tasks.length)
    // function getCount(){
    //     setCount(count=>tasks.length)
    // }

    function showMessage(text, type = "info") {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: "", type: "" }), 2000);
    }

    function AddTask() {
        if (newTask.trim() === "") {
            showMessage("Please enter a task.", "error");
            return;
        }
        if(tasks.some((t)=>t.toLowerCase()===newTask.toLowerCase())){
            showMessage(`${newTask} already exist in the list`)
            return
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
            
            <p>Number of tasks are: {tasks.length}</p>
            
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