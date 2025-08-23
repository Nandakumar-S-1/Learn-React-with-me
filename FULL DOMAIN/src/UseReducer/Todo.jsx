import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "rem":
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
};

const Todo = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === "") return; // prevent empty tasks
    dispatch({ type: "add", payload: task });
    setTask(""); // ✅ clear input after adding
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {todo.map((t, i) => (
          <li key={i}>
            {t}{" "}
            <button onClick={() => dispatch({ type: "rem", payload: i })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
