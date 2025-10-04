import React, { useState } from 'react'
import Child1 from './Child1'


const Parent1 = () => {
    const [count,setCount]=useState(0)
    const [val,setVal]=useState('')
    console.log('parent');
    
  return (
    <div>
        <Child1 count={count}/>
        <button onClick={()=>setCount(count+1)}>+</button>
        <p>{val}</p>
        <input type="text" onChange={(e)=>setVal(e.target.value)}/>
    </div>
  )
}

export default Parent1
