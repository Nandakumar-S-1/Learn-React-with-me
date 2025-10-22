import React, { useState } from 'react'
import ThemeChangeChild from './ThemeChangeChild'

const ThemeChangeParent = () => {
    const [theme,setTheme]=useState('light')

    const handleTheme = ()=>{
        setTheme(p=>p==='light' ? 'dark' : 'light')
    }

    const lightTheme = {
        backgroundColor : 'lightgrey',
        color:'black'
    }
    const darkTheme = {
        backgroundColor : 'black',
        color :'white'
    }

    const handleColor = theme ==='light' ? darkTheme : lightTheme

  return (
    <div style={handleColor}>
        <h2>parent</h2>
        <ThemeChangeChild onChange={handleTheme}/>
      
    </div>
  )
}

export default ThemeChangeParent
