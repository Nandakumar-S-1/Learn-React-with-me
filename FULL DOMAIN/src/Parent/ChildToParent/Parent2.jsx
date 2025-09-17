import React, { useState } from 'react'
import Child1 from './Child!'

const Parent2 = () => {
    console.log('in parent')
    const [text,setText]=useState('')
    function HandleTextChange(data){
        setText(data)
    }
  return (
    <div>
      <h1>parent component</h1>
      <h3>{text}</h3>
      <Child1 sendData={HandleTextChange}/>
    </div>
  )
}

export default Parent2
