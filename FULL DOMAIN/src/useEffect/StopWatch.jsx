import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time,setTime]=useState(0)
    const [run,isRun]=useState(false)
    useEffect(()=>{
        let timer
        if(run){
            timer= setInterval(()=>{
                setTime(t=>t+1)
            },1000)
            return () =>clearInterval(timer)
        }
    },[run])
  return (
    <div>
      <h1>stopwatch</h1>
      <h3>{time}</h3>
      <button onClick={()=>isRun(true)}>start</button>
      <button onClick={()=>isRun(false)}>stop</button>
      <button onClick={()=>{setTime(0),isRun(false)}}>reset</button>
    </div>
  )
}

export default StopWatch
