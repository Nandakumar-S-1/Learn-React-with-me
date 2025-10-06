import React, { useMemo } from 'react'

const ChildMemo = ({val}) => {
    const square = useMemo(()=>val*val,[val])
  return (
    <p>squared val: {square}</p>
  )
}

export default ChildMemo
