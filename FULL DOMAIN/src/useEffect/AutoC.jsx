import React, { useEffect, useState } from 'react'

const Auto = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>setCount(p=>p+1),1000)
        return () =>clearInterval(timer)
    },[])
    return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default Auto
