import React, { useReducer, useState } from 'react'
const initial =[]
const reducer =(state,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,action.payload]
        default :
            return state
    }
}
const ReducerList = () => {
    const [input,setINput]=useState('')
    const [items,dispatch]=useReducer(reducer,initial)

    const handleAdd =()=>{
        dispatch({type:'ADD',payload:input})
        setINput('')
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setINput(e.target.value)}/>
        <button onClick={handleAdd}>+</button>
        <ul>
            {
                items.map((item,index)=>{
                  return  <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}

export default ReducerList
