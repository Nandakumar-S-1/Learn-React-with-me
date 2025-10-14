import React from 'react'

const Child1 = React.memo(({count}) => {
    console.log('child rendered');
    
  return (
    <div>
      <p>{count}</p>
    </div>
  )
})

export default Child1
