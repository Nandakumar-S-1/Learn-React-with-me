import React from 'react'
import HOC from './HOC'
const Component1 = ({count,handleClick}) => {

  return (
    <div>
        <button onClick={handleClick}>click {count}</button>
    </div>
  )
}

export default HOC(Component1)
