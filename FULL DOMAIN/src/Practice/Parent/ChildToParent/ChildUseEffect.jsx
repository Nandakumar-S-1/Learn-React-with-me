// //without button

// import React, { useEffect } from 'react'

// const ChildUseEffect = ({dataToSent}) => {
//     const data = "Hello Im Nandakumar"
//     useEffect(()=>{
//         dataToSent(data)
//     },[dataToSent])
//   return (
//     <div>
//       <h4>Child Component</h4>
//     </div>
//   )
// }

// export default ChildUseEffect


// //with button

import React, { useEffect, useState } from 'react'

const ChildUseEffect = ({dataToSent}) => {
    const [data,setData]=useState('')
    useEffect(()=>{
        if(data){
            dataToSent(data)
        }
    },[data,dataToSent])
    return (
    <div>
        <h4>Child</h4>
      <button onClick={()=>setData('helloo Im Nandakumar')}>  sent</button>
    </div>
  )
}

export default ChildUseEffect
