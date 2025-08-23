import React, { useState } from 'react'

const TabSwitch = () => {
    const [tab,setTab]=useState('home')
    return (
    <div>
      <button onClick={()=>setTab("home")}>home</button>
      <button onClick={()=>setTab('about')}>about</button>
      <h2>{tab==="home" ? "Welcome Home" : "About us"}</h2>
    </div>
  )
}

export default TabSwitch
