import React, { useContext } from 'react'
import { RedContext } from './ReducerContext'

const ChildContext = () => {
    const {state,dispatch}=useContext(RedContext)
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:'+'})}>+</button>
      <button onClick={()=>dispatch({type:'-'})}>-</button>
    </div>
  )
}

export default ChildContext
