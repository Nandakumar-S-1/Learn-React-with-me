import React, { useState } from 'react'

const InputsMatch = () => {
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(0)
    const InputsMatch = num1===num2
    return (
    <div>
      <input type="number" onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" onChange={(e)=>setNum2(e.target.value)}/>
    <div>{InputsMatch ? 'Match' : 'not matching'}</div>
    </div>
  )
}

export default InputsMatch
