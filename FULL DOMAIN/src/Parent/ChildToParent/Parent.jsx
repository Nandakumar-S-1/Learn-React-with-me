   // Child to parent pass data

   import React, { useState } from 'react'
import Child from './Child'
   
   const Parent = () => {
    const [text,setText]=useState('')
    const handletText = (data)=>{
        setText(data)
    }
     return (
       <div>
         <h1>Parent</h1>
         <h4>{text}</h4>
        <Child message={handletText}/>
       </div>
     )
   }
   
   export default Parent
   