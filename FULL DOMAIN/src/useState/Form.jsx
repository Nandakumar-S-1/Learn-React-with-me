import React, { useState } from 'react'

const Form = () => {
    const [form,setForm]=useState({name:'',email:''})
  return (
    <div>
      <input type="text" placeholder='enter name' onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input type="email" placeholder='enter email' onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <p>name: {form.name} & email: {form.email}</p>
    </div>
  )
}

export default Form
