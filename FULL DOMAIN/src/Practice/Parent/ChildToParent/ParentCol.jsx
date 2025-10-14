import React, { useState } from 'react'
import ChildCol from './ChildCol'

const ParentCol = () => {
    const [color,setColor]=useState(null)
    const handleColor = (c)=>{
        setColor(c)
    }
  return (
    <div>
      <div style={{backgroundColor:color,width:"300px",height:"200px",border:"1px solid black"}}></div>
        <ChildCol handleColor={handleColor}/>
    </div>
  )
}

export default ParentCol
