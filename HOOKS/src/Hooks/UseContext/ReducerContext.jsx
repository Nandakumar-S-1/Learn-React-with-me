import React, { createContext, useReducer } from 'react'

export const RedContext =createContext()
const initial =0
const reducer = (state,action)=>{
    switch (action.type){
        case '+':
            return state+1
        case '-':
            return state-1 
        default :
            return state
    }
}

const ReducerContext = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initial)
  return (
    <div>
      <RedContext.Provider value={{state,dispatch}}>
            {children}
      </RedContext.Provider>
    </div>
  )
}

export default ReducerContext
