import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    const [width,setWidth]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize =()=>{
            setWidth(width.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
  return (
    <div>
      <h2>{width}</h2>
    </div>
  )
}

export default WindowResize