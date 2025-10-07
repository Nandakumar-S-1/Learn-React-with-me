import React, { createContext, useState } from 'react'
import ChildProvider from './ChildProvider'

export const CheckContext = createContext()

const Provider = () => {
    const [check,setCheck]=useState(false)
  return (
      <CheckContext.Provider value={{check,setCheck}} >
        <ChildProvider />
      </CheckContext.Provider>
  )
}

export default Provider
