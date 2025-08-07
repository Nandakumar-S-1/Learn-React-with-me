import React, { useState } from 'react'

const UseStateHooks = () => {
    const [count,setCount]=useState(0)
    function Increment(){
       return setCount(p=>p+1)
    }
    function Decrement(){
        return setCount(p=>p-1)
    }
    function reset(){
      return setCount(0)
    }
  return (
    <>
        <h2>{count}</h2>
        <button onClick={()=>Increment()}>+</button>
        <button onClick={()=>reset()}>0</button>
        <button onClick={()=>Decrement()}>-</button>
    </>
  )
}

export default UseStateHooks