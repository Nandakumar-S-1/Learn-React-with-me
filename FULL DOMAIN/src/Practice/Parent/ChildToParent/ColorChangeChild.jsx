import React, { useState } from 'react'

const ChildCol = ({handleColor}) => {
    const [col,setCol]=useState(null)
    const handleChange =(e)=>{
        const {value}=e.target
        setCol(value)
        handleColor(value)
    }
  return (
    <div>
      <input type='text' onChange={handleChange} value={col}/>
    </div>
  )
}

export default ChildCol
