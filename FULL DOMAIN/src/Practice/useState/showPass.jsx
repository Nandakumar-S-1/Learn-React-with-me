import React, { useState } from 'react'

const ShowPass = () => {
    const [show,setShow]=useState(false)
    return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={()=>setShow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  )
}

export default ShowPass
