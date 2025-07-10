import React, { useState } from 'react'

const UseStateCounter = () => {
    const [count,setCount]=useState(0)
    const updaterFun =()=>{
        setCount(p=>p+1)
    }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={updaterFun}>update</button>
    </div>
  )
}

export default UseStateCounter
