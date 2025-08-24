import React, { useState } from 'react'

const HOC = (Component) => {
  return function UpdatedComp(){
    const [count,setCount]=useState(0)
    const handleClick = ()=>{
        setCount(p=>p+1)
    }
    return <Component count={count} handleClick={handleClick}/>
  }
}

export default HOC
