import React, { createContext, useState } from 'react'

const ContextTheme = createContext()

function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light')
    function handle(){
        setTheme((p)=>(p==='light'?'dark':'light'))
    }
    const [count,setCount]=useState(0)
    function handleCount(){
        setCount((c)=>(c+1))
    }
  return (
    <ContextTheme.Provider value={{theme,handle,count,handleCount}}>
        {children}
    </ContextTheme.Provider>
  )
}

export default ThemeProvider
export {ContextTheme}
