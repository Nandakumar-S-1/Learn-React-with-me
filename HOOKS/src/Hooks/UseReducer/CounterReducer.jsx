import React, { useReducer } from 'react'

const initial =0
const reducer = (state,action)=>{
    switch (action.type) {
        case '+':
           return state+1
        case '-':
            return state-1
        case 'reset':
            return initial
        default:
            return state    
    }
}

function CounterReducer() {
    const [count,dispatch]=useReducer(reducer,initial)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type:'+'},console.log('added...')
      ) }>+</button>
      <button onClick={()=>dispatch({type:'reset'},console.log('reset')
      )}>reset</button>
      <button onClick={()=>dispatch({type:'-'},console.log('subtracted...')
      )}>-</button>
    </div>
  )
}

export default CounterReducer
