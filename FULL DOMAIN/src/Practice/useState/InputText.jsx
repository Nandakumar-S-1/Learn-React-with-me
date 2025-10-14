import React, { useState } from 'react'

const InputText = () => {
    const [text,setText]=useState('')
  return (
    <div>
      <input value={text} type="text" onChange={(e)=>setText(e.target.value)}/>
        <p>Typed text is {text}</p>
    </div>
  )
}

export default InputText
