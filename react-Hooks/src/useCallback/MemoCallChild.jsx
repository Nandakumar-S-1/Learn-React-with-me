import React from 'react'

const MemoCallChild = ({increment}) => {
    console.log('child rendered');
    
  return (
    <div>
        <button onClick={increment}>+</button>      
    </div>
  )
}

export default React.memo(MemoCallChild)
