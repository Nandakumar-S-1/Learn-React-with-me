// //value will be visible here in this sbling

// export const Sibling2 = ({value})=>{
//     return (<p>{value}</p>)
// }  


import React from 'react'

const Sibling2 = ({setMes}) => {
  return (
    <div>
        <p>sib 2</p>
      <button onClick={()=>setMes("message from sibling 1")}>send</button>
    </div>
  )
}

export default Sibling2
