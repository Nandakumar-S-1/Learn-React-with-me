import React from 'react'

const ChildComp = ({onChange,value}) => {

  return (
    <div>
      <h2>child</h2>
      <h3>{value}</h3>
      <button onClick={onChange}>change</button>
    </div>
  )
}

export default ChildComp
