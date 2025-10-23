import React, { useRef, useState } from 'react'

const UseRefEg = () => {
    const [text,setText]=useState('')
    const ref=useRef('hello')
    function handleState(){
        console.log('state changed');
        
        setText('world')
    }
    function handleRef(){
        console.log('ref changed');
        
        ref.current='world'
    }
  return (
    <div>
      <h2>ref: {ref.current}</h2>
      <h2>state: {text}</h2>
      <button onClick={handleRef}>refChange</button>
      <button onClick={handleState}>stateChange</button>
    </div>
  )
}

export default UseRefEg
