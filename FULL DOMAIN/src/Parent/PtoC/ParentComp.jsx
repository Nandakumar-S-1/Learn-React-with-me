import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    let messageFromP='hello child'
  return (
    <div>
      <h2>parent</h2>
      <ChildComp message={messageFromP}/>
    </div>
  )
}

export default ParentComp
