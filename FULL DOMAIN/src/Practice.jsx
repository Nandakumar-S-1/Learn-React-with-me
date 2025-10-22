import React, { useState } from 'react'
import ChildComp from './ChildComp'

const Practice = () => {
  const [theme,setTheme]=useState('light')
  const handleTheme = () =>{
    setTheme(p=>p==='light' ? 'dark' : 'light')
  }
  let lightTheme = {
    backgroundColor :'grey',
    color:'black'
  }
  let darkTheme ={
    backgroundColor :'black',
    color :'white'
  }

  const handleColor = theme ==='light' ? darkTheme : lightTheme

  return (
    <div style={handleColor}>
      <h1>parent</h1>
      <ChildComp onChange={handleTheme} value={theme}/>
    </div>
  )
}

export default Practice