import React, { useContext } from 'react'
import { ContextTheme } from './Hooks/UseContext/ThemeContext'

function App() {
  const {theme,handle,count,handleCount} = useContext(ContextTheme)
  return (
    <>
      <h2>{theme}</h2>
      <button onClick={handle}>click</button>
      <h3>{count}</h3>
      <button onClick={handleCount}>inc</button>
    </>
  )
}

export default App
