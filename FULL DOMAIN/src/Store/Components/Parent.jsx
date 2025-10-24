import React from 'react'
import {useSelector} from 'react-redux'
const Parent = () => {
    const valueFromChild = useSelector((state)=>state.value.value)
  return (
    <div>
      <h2>data to parent is: {valueFromChild}</h2>
    </div>
  )
}

export default Parent
