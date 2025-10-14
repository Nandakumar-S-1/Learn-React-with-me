import React, { useState } from 'react'

const ControlledForm = () => {
  const [form,setForm]=useState({name:"",email:""})

  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    alert(`name : ${form.name}, Email: ${form.email} `)
  }
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' onChange={handleChange}/>
        <input type="email" placeholder='Enter your email' onChange={handleChange}/>
        <button type='submit'>submit</button>
    </form>
  )
}

export default ControlledForm