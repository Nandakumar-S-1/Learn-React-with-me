import React, { useRef } from 'react'

const SimpleUseRef = () => {
    console.log('val');
    
    const inputRef =useRef()
    const handleSubission =()=>{
        console.log('handle funciton');
        
        alert('Input value is '+ inputRef.current.value)
    }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubission}>change</button>
    </div>
  )
}

export default SimpleUseRef
