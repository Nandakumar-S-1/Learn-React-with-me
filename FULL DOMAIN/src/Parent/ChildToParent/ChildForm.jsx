import React, { useState } from 'react'

const ChildForm = ({onSubmit}) => {
    const [name,setName]=useState('')
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(name)
        setName("")
      }}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default ChildForm
