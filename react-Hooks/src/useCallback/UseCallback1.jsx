import React from 'react'

const UseCallback = ({incrementAge}) => {
  console.log('child rendr');
  
  return (
    <div>
      <button onClick={incrementAge}>add Age</button>
    </div>
  )
}

export default React.memo(UseCallback)