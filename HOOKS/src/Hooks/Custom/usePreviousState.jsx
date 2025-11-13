//use case : to compare te state changes
import React, { useEffect, useRef } from 'react'

const usePreviousState = (val) => {
    const ref=useRef()
    useEffect(()=>{
        ref.current = val
    })
  return ref.current
}

export default usePreviousState
