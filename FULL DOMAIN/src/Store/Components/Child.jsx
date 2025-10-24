import React from 'react'
import {useDispatch} from 'react-redux'

const Child = () => {
  const dispatch= useDispatch()
  const sentValueToParent = (val)=>{
    dispatch({type:'Update_value',payload:val})
  }
  return (
    <div>
      <button onClick={()=>sentValueToParent('This is to Parent')}>
        sent
      </button>
    </div>
  )
}

export default Child
