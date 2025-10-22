import React from 'react'

const Child1 = ({sendData}) => {
    // console.log('child')
    const data = "My Name Is Nandakumar"
    return (
    <div>
      <button onClick={()=>sendData(data)}>send</button>
    </div>
  )
}

export default Child1
