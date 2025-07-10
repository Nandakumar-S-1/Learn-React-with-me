import React from 'react'

const ReactMemoFunction = ({name}) => {
  console.log('child renered (react.memo)');
  
    return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default React.memo(ReactMemoFunction)
