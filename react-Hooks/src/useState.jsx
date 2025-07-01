import React ,{useState} from "react";

// export function CounerUseState(){
//     const [count,setCount] =useState(0)
//     return (
//         <div>
//             <h3 ><b>{count}</b></h3>
//             <button onClick={()=>setCount(count+1)}>add</button>
//             <button onClick={()=>setCount(0)}>reset</button>
//             <button onClick={()=>setCount(count-1)}>sub</button>
//         </div>
//     )
// }

// export function CounerUseState(){
//     const [count,setCount]=useState(0)
//     function handleClick(){
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <h1>Count</h1>
//             <button onClick={handleClick}>{count}</button>
//         </div>
//     )
// }

export function CounerUseState(){
    const [word,setWord]=useState('')
    return(
        <>
        <input value={word} onChange={(e)=>setWord(e.target.value)} />
        <h2>{word}</h2>
        </>
    )
}