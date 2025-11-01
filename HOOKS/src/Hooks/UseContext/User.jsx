import React, { createContext, useState } from 'react'

export const UserContext =createContext()
const User = ({children}) => {
  const [name,setName]=useState('')
  return (
    <div>
      <UserContext.Provider value={{name,setName}}>
        {children}
      </UserContext.Provider>      
    </div>
  )
}

export default User
