import React from 'react'

const CounterChild = React.memo(({IncrementCount}) => {
    console.log('Child rendered');
    
  return (
    <div>
      <button onClick={IncrementCount}>increment Count</button>
    </div>
  )
})

export default CounterChild
