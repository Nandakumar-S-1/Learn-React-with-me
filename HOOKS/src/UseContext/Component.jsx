import React, { useContext } from 'react'
import { UserContext } from './User'

const Component = () => {
  const {name,setName}=useContext(UserContext)
  return (
    <div>
      <h2>{name}</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Component
