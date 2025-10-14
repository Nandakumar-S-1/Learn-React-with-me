// //without button

// import React, { useState } from 'react'
// import ChildUseEffect from './ChildUseEffect'

// const ParentUseEffect = () => {
//     const [mes,setMes]=useState('')
//     const handleMessage = (data)=>{
//         setMes(data)
//     }
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <h3>{mes}</h3>
//       <ChildUseEffect dataToSent={handleMessage}/>
//     </div>
//   )
// }

// export default ParentUseEffect


////with button

import React, { useState } from 'react'
import ChildUseEffect from './ChildUseEffect'

const ParentUseEffect = () => {

    const [text,setText]=useState('')
    const handleMessage = (data) =>{
        setText(data)
    }
  return (
    <div>
        <h1>Parent</h1>
      <h2>{text}</h2>
      <ChildUseEffect dataToSent={handleMessage}/>
    </div>
  )
}

export default ParentUseEffect
