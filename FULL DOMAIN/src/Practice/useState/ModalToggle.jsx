import React, { useState } from 'react'

const ModalToggle = () => {
    const [show,setShow]=useState(false)
    return (
    <div>
      <button onClick={()=>setShow(true)}>open</button>
      {show && (<div style={{background:"cyan" ,padding:20}}>
        <h2>content</h2>
        <button onClick={()=>setShow(false)}>close</button>
      </div>)}
    </div>
  )
}

export default ModalToggle
