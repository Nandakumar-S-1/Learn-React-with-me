import React,{createContext,useReducer} from 'react'

export const ReducerContext = createContext()

const intial =0
const reducer =(state,action)=>{
    switch(action.type){
        case '+':
            return state+1
        case '-':
            return state-1
        case '0':
            return intial
        default :
            return state
    }
}

const CreateContextFun = ({children}) => {
    const [state,dispatch]=useReducer(reducer,intial)
    return (
    <div>
      <ReducerContext.Provider value={{state,dispatch}}>
            {children}
      </ReducerContext.Provider>
    </div>
  )
}

export default CreateContextFun