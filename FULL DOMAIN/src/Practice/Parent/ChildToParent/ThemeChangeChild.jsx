import React from 'react'

const ThemeChangeChild = ({onChange}) => {
  return (
    <div>
        <p>child component</p>
      <button onClick={onChange}>change</button>
    </div>
  )
}

export default ThemeChangeChild
