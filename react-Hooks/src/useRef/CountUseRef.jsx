import React, { useEffect, useRef, useState } from 'react'

const CountUseRef = () => {
    const [value,setValue]=useState(0)
    const count=useRef(0)
    useEffect(()=>{
            count.current=count.current + 1
    })
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=>setValue(prev=>prev+1)}>add</button>
      <h4>{count.current}</h4>
    </div>
  )
}

export default CountUseRef
