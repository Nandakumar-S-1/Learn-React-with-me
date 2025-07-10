import React, { useState } from 'react'

const Toggle = () => {
    const [on,setON]=useState(false)
    const handleToggle =()=>{
        setON(p=>!p)
    }
  return (
    <div>
        <input type="checkbox" checked=
        {!on} onChange={handleToggle}/>
        <button onClick={handleToggle} > {on ?'ON' : 'OFF'}</button>
    </div>
  )
}

export default Toggle