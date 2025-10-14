import React, { useState } from 'react'

const Todo = () => {
    const [todos,setTodo]=useState([])
    const [task,setTask]=useState('')

    const handleAdd = ()=>{
        setTodo([...todos,task])
        setTask('')
    }
    return (
    <div>
      <input value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAdd}>add</button>
      <ul>{todos.map((t,i)=><li key={i}>{t}</li>)}</ul>
    </div>
  )
}

export default Todo
