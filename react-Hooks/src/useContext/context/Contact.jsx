import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Contact = () => {
    const {phone} = useContext(AppContext)

  return (
    <div>
      <h3>Contact</h3>
      <h4>Phone:{phone}</h4>
    </div>
  )
}

export default Contact
