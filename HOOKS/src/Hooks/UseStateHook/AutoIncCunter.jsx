import React, { useEffect, useRef, useState } from 'react'

const AutoIncCunter = () => {
    const [count,setCount]=useState(0)
    const [isRunning,setIsRunning]=useState(false)
    const intervalRef =useRef(null)
    useEffect(()=>{
         if(isRunning){
            intervalRef.current = setInterval(()=>{
                setCount((p)=>p+1)
            },1000)
         }
         return ()=> clearInterval(intervalRef.current)
    },[isRunning])

    const handleStart = ()=>{
        if(!isRunning)setIsRunning(true)
    }
const handleStop =()=>{
    setIsRunning(false)
    clearInterval(intervalRef.current)
}
  return (
    <div style={{textAlign:'center'}}>
      <h2>the count is : { count}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  )
}

export default AutoIncCunter
