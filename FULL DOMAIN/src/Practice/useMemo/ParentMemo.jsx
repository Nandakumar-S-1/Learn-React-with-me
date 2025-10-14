import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

const ParentMemo = () => {
    const [num,setNum]=useState(0)
  return (
    <div>
        <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <ChildMemo val={num}/>
    </div>
  )
}

export default ParentMemo
