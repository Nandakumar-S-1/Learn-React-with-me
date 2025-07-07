import React, { useEffect, useState } from 'react'

const HandleWindoResize = () => {
    const [windowWidth,setWidth]=useState(window.innerWidth)
    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
  return (
    <div>
      <p>{windowWidth}</p>
    </div>
  )
}

export default HandleWindoResize

