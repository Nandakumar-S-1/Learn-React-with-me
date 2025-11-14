import React, { useState } from 'react'

export default function FirstAndLast() {
    const [name,setName]=useState({fname:'',lname:''})

  return (
    <form action="">
        <input type="text" placeholder='enter your first name' value={name.fname} onChange={e=>setName({...name,fname:e.target.value})}/>
        <input type="text" placeholder='enter your second name' value={name.lname} onChange={e=>setName({...name,lname:e.target.value})}/>
        <h2>Your first name is {name.fname}</h2>
        <h2>Your last name is {name.lname}</h2>
        <h3>{JSON.stringify(name)}</h3>
    </form>
  )
}
