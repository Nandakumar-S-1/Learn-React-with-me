   // Child to parent pass data
   import React from 'react'
   
   const Child = (prop) => {

     return (
       <div>
         <button onClick={()=>prop.message('hello')}>sent</button>
       </div>
     )
   }
   
   export default Child
   