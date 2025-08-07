import React, { useState } from 'react'

const ThemeChange = () => {
    const [theme,setTheme]=useState('light')
    const handleTheme = ()=>{
        setTheme(theme==='dark' ? 'light' : 'dark')
    }
    const lightTheme = {
        backgroundColor:'white',
        color:'black'
    }
    const darkTheme = {
        backgroundColor:'black',
        color:'white'
    }
    const colorTheme = theme ==='light' ? lightTheme : darkTheme
  return (
    <div style={colorTheme}>
        <h2>hello world</h2>
        <button onClick={handleTheme}>click</button>
    </div>
  )
}

export default ThemeChange
