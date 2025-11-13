//Use case:--Toggle dark/light mode, show/hide password, dropdowns.
import React from 'react'
import { useState } from 'react'

const UseToggle = () => {
    const [state,setState]=useState(false)
    const handle = () =>{
        setState(state=>!state)
    }
  return (
    [state,handle]
  )
}

export default UseToggle

