import React, { useState } from 'react'

const useToggle = (init=false) => {
  const [val,setVal]=useState(init)
  const toggle = () => setVal(!val)
    return (
    [val,toggle]
  )
}

export default useToggle