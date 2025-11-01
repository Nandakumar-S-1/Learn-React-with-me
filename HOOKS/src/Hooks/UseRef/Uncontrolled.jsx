import React, { useRef } from 'react'

const Uncontrolled = () => {
    const ref=useRef()
  return (
    <div>
        <input type="checkbox" ref={ref}/>
        <button onClick={()=>ref.current.checked=!ref.current.checked}>change</button>
    </div>
  )
}

export default Uncontrolled