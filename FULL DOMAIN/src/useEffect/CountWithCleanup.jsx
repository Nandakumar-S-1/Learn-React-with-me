import React, { useEffect, useState } from 'react'

const CountWithCleanup = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const interv = setInterval(()=>{
            setCount(c=>c+1)
        },1000)

        return ()=>clearInterval(interv)
    },[])
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default CountWithCleanup
