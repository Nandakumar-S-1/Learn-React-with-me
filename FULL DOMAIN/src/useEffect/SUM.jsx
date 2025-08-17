import React, { useState } from 'react'

const SUM = () => {
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)

    const handleAddition = ()=>{
        setNum1(num2+num1)
    }

  return (
    <div>
        <p>{num1}</p>
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        <button onClick={handleAddition}>sum</button>
    </div>
  )
}

export default SUM
