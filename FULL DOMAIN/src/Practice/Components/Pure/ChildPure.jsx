import React, { memo } from 'react'

const ChildPure = ({val}) => {
  console.log('Child rendered')
  return <h2>child is now: {val}</h2>  
}

export default memo( ChildPure)
