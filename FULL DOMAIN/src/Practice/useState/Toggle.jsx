import React, { useState } from 'react'

const Toggle = () => {
  const [toggle,setToggle]=useState(false)
    return (
    <div>
      <input type="checkbox" checked={toggle}/>
      <button onClick={()=>setToggle(!toggle)}>change</button>
    </div>
  )
}

export default Toggle
