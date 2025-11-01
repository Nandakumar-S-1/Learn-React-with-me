import React, { createContext, useContext, useState } from 'react'

const MessageContext = createContext()

function C1(){
    const {setMes} = useContext(MessageContext)
    return <button onClick={()=>setMes("hello ,good morning")}>Send</button>
}
function C2(){
    const {mes} = useContext(MessageContext)
    return <h2>{mes}</h2>
}

const Parent = () => {
    const [mes,setMes]=useState('')

  return (
    <MessageContext.Provider value={{mes,setMes}}>
        <C1/>
        <C2/>
    </MessageContext.Provider>
  )
}

export default Parent