import React, { forwardRef, useRef } from 'react'

const Child = forwardRef((prop,ref)=> <input ref={ref} placeholder='focus here'/>)

const Forward = () => {
    const inputRef=useRef()
  return (
    <div>
      <Child ref={inputRef}/> 
      <button onClick={()=>inputRef.current.focus()}>+</button>
    </div>
  )
}

export default Forward
