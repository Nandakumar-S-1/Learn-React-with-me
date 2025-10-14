//This component uses a ref to keep track of how many times the button was clicked.

import React, { useRef } from 'react'

const UseRefCounter = () => {
    let countRef = useRef(0)

    function handleClick(){
        countRef.current = countRef.current +1
        alert(`I clicked ${countRef.current} times`)
    }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default UseRefCounter