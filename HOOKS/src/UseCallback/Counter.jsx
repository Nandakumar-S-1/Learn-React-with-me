import React, { useCallback, useState } from 'react'
import CounterChild from './CounterChild';

const Counter = () => {
    console.log('parent rendered');
    
    const [count,setCount]=useState(0)
    const [val,setVal] =useState(0)

    const IncrementCount = useCallback(()=>{
        setCount((v)=>v+1)
    },[])
  return (
    <div>
      <h2>value is {val}</h2>
      <button onClick={()=>setVal((v)=>v+1)}>increment value</button>

      <h2>{count}</h2>
      <CounterChild IncrementCount={IncrementCount}/>
    </div>
  )
}

export default Counter
