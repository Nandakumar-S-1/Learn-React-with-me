import React, { useState } from 'react'

const UseStateTheme = () => {
    const [theme,setTheme]=useState('light')

    const handleTheme = () =>{
        setTheme(theme === 'dark' ? 'light' :'dark')
    }
    const lightTheme = {
        backgroundColor:'white',
        color:'black'
    }
    const darkTheme ={
        backgroundColor:'black',
        color:'white'
    }
    const colorTheme = theme ==='light' ? darkTheme : lightTheme
  return (
    <div style={colorTheme}>
      <h1>Hello World</h1>
    <button onClick={handleTheme}>click</button>
    </div>
  )
}

export default UseStateTheme
