import React from 'react'
import ChildForm from './FormChild'

const ParentForm = () => {
    function handle(name){
        alert(`name is ${name}`)
    }
  return (
    <div>
      <ChildForm onSubmit={handle}/>
    </div>
  )
}

export default ParentForm
