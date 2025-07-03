import React, { useCallback, useState } from 'react'
import MemoCallChild from './MemoCallChild'

const MemoCallback = () => {
  const [count,setCount]=useState(0)

  const increment = useCallback(()=>{
    setCount(prev=>prev+1)
  },[])
  return (
    <div>
      <h2>{count}</h2>
      <MemoCallChild increment={increment}/>
    </div>
  )
}

export default MemoCallback
