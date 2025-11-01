import React, { useState } from 'react'

const UseState = () => {
  const [count,setCount]=useState(0)
  function handleCount(){
    setCount(c=>c+1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>c</button>
    </div>
  )
}

export default UseState
