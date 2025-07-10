import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Footer = () => {

    const {name} = useContext(AppContext)
  return (
    <div>
      <h1>Footer</h1>
      <h4>Name is : {name}</h4>
    </div>
  )
}

export default Footer
