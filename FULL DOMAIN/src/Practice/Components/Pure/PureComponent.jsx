import React, { useState } from 'react'
import ChildPure from './Pure/ChildPure'

const PureComponent = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(p=>p+1)}>+</button>
      <h2>parent: {count}</h2>
      <ChildPure val="no-change"/>
    </div>
  )
}

export default PureComponent
