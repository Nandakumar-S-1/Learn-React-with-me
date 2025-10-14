// import React, { useState } from 'react'

// const ThemeChange = () => {
//     const [theme,setTheme]=useState('light')

//     function handleTheme(){
//         setTheme(theme==='light'?'dark':'light')

//     }
//     const lightTheme = {
//         backgroundColor:'white',
//         color:'black'
//     }
//     const darkTheme = {
//         backgroundColor:'black',
//         color:'white'
//     }
//     const changeTheme = theme==='light' ? darkTheme : lightTheme

//   return (
//     <div style={changeTheme}>
//       <h2>Hello World</h2>
//       <button onClick={handleTheme} style={changeTheme}>change</button>
//     </div>
//   )
// }

// export default ThemeChange 



////////////////////////method 2

import React, { useState } from 'react'

const ThemeChange = () => {
  const [dartk,setDark]=useState(false)
  return (
    <div style={{padding:10, maxWidth:500,backgroundColor:dartk ? "black" : "white",color:dartk? "white" : "black"}}>
      <h2>{dartk ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={()=>!setDark(!dartk)}>change</button>
    </div>
  )
}

export default ThemeChange
