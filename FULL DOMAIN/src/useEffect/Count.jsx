import React, { useEffect, useRef, useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
    let refV=useRef(0)
    useEffect(()=>{
        console.log("count changed to ",count);
        
    },[count])

    function handle(){
      refV.current=refV.current+1
      alert(`count updated to ${refV.current} `)
    }
    return (
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={handle}>ref</button>
    </div>
  )
}

export default Count
