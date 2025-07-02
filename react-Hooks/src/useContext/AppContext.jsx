import React, { createContext } from 'react'


export const AppContext = createContext()
const ContextProvider = (props) => {
    let name='nandu'
    let phone='+91 904835355'
  return (
    <AppContext.Provider value={{name , phone}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider
