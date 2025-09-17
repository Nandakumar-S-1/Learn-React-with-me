import React, { useState } from 'react'

const SumOf2 = () => {
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)
    const [sum,setSum]=useState(null)
    return (
    <div>
      <input type="number" onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" onChange={(e)=>setNum2(e.target.value)}/>
      <button onClick={()=>setSum(Number(num1) + Number(num2))}>sum</button>
        <h1>{sum}</h1>
    </div>
  )
}

export default SumOf2
