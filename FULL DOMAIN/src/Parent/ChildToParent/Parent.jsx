//    // Child to parent pass data

//    import React, { useState } from 'react'
// import Child from './Child'
   
//    const Parent = () => {
//     const [text,setText]=useState('')
//     const handletText = (data)=>{
//         setText(data)
//     }
//      return (
//        <div>
//          <h1>Parent</h1>
//          <h4>{text}</h4>
//         <Child message={handletText}/>
//        </div>
//      )
//    }
   
//    export default Parent
   























import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [data,setData]=useState('')
  const handleData = (data)=>{
    setData(data)
  }
  return (
    <div>
      <h2>parent comp</h2>
      <h3>{data}</h3>
      <Child sendData={handleData}/>
    </div>
  )
}

export default Parent
