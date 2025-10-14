import React, { useReducer } from 'react'

const reducer = (state,action) =>{
    switch(action.type){
        case "+": return state+1
        case "0":return 0
        case "-" :return state-1
        default : return state
    }
}

const Counter = () => {
    const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"+"})}>+</button>
        <button onClick={()=>dispatch({type:"0"})}>0</button>
        <button onClick={()=>dispatch({type:"-"})}>-</button>
    </div>
  )
}

export default Counter
