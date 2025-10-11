// //input sibling
// export const Sibling1 = ({onChange})=>{
//     return (
//         <input type="text" onChange={e=>onChange(e.target.value)}/>
//     )    
// }


import React from 'react'

const Sibling1 = ({message}) => {
  return (
    <div>
        <p>sib1</p>
      <h2>{message}</h2>
    </div>
  )
}

export default Sibling1
