import React, { useState } from 'react'

const DropDown = () => {
    const [open,setOpen]=useState(false)
  return (
    <div>
      <button onClick={()=>setOpen(!open)}>toggle</button>
      {open && <ul><li>option 1</li><li>option 2</li></ul>}
    </div>
  )
}

export default DropDown