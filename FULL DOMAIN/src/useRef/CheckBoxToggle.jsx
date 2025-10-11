import React, { useRef } from 'react'

const CheckBoxToggle = () => {
    const checkRef=useRef(null)
    const toggleCheck = () =>{
        if(checkRef.current){
            checkRef.current.checked=!checkRef.current.checked
        }
    }
  return (
    <div>
      <input type="checkbox" ref={checkRef} defaultChecked={false}/>
        <button onClick={toggleCheck}>togg</button>
    </div>
  )
}

export default CheckBoxToggle
