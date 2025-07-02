import React, { useReducer } from "react";


const initial = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "0":
      return initial;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'+'})}>+</button>
      <button onClick={()=>dispatch(({type:'0'}))}>reset</button>
      <button onClick={()=>dispatch({type:'-'})}>-</button>
    </div>
  );
}

export default UseReducer;