import React, { useContext } from 'react'
import { CheckContext } from './Provider'

const ChildProvider = () => {
    const {check,setCheck} = useContext(CheckContext)
  return (
    <div>
      <input type="checkbox" checked={check}/>
      <button onClick={()=>setCheck(!check)}>toggle</button>
    </div>
  )
}

export default ChildProvider
