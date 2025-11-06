// import React, { createContext, useContext, useState } from 'react'
// import C from './C'
// import Child from './Child'
// const MessageContext = createContext()

// function C1(){
//     const {setMes} = useContext(MessageContext)
//     return <button onClick={()=>setMes("hello ,good morning")}>Send</button>
// }
// function C2(){
//     const {mes} = useContext(MessageContext)
//     return <h2>{mes}</h2>
// }

// const Parent = () => {
//     const [mes,setMes]=useState('')

//   return (
//     <MessageContext.Provider value={{mes,setMes}}>
//         <C1/>
//         <C2/>
//     </MessageContext.Provider>
//   )
// }

// export default Parent







// import React from 'react'
// import { useRef } from 'react'
// import { forwardRef } from 'react'
// const Input =  forwardRef((prop,ref)=><input ref={ref} {...prop}/>)
// const Parent = () => {
//     const inputRef=useRef()
//   return (
//     <div>
//         <Input ref={inputRef}/>
//         <button onClick={()=>inputRef.current.focus()}>change</button>
//     </div>
//   )
// }

// export default Parent











import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
const counterContext = createContext()

export const P = () => {
  const {count,setCount}=useContext(counterContext)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default function Parent(){
  const [count,setCount]=useState(0)
  return(
    <counterContext.Provider value={{count,setCount}}>
      <P/>
    </counterContext.Provider>
  )
}
