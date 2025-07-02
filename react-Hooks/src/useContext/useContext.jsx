import React,{useContext} from 'react'
import { ReducerContext } from './CreateContext'


const UseContextFun = () => {
    const {state,dispatch}=useContext(ReducerContext)
  return (
    <div>
        <p>{state}</p>
      <button onClick={()=>dispatch({type:'+'})}>+</button>
      <button onClick={()=>dispatch({type:'0'})}>0</button>
      <button onClick={()=>dispatch({type:'-'})}>-</button>
    </div>
  )
}

export default UseContextFun
