import React, { useState } from "react";
import Child from "./props";

// ///////////////1//////////////props are used to send data from parent to child

// export default function Parent(){
//   let name="Nandu"
//   return <Child name={name}/>
// }

//////////using callback function,we can pass data from child to parent

// export default function Parent(){
//   const [mes,setMes]=useState('')
//   const handleMes =(m)=>setMes(m)
//   return <Child sendMessage={handleMes}/>
// }


////////toggle check box on button click

// export default function Parent(){
//   const [toggle,setToggle]=useState(false)
//   return(
//     <div>
//       <Child toggleBox={()=>setToggle(!toggle)}/>
//       <input type="checkbox" checked={toggle}/>
//     </div>
//   )
// }

































