// import React,{useState,useMemo} from "react";
// export default function UseMemoFunction(){
//     const [number,setNumber] =useState(0)
//     const [theme,setTheme] =useState(false)
//     let updateNum=useMemo(()=>{
//         return numFunct(number)
//     },[number])

//     const themeStyles ={
//         backgroundColor:theme ? 'black' : 'grey',
//         color: theme ? 'white' : 'black'
//     }
//     return (
//         <>
//             <input type="number" value={number} onChange={e=>setNumber(e.target.value)} /> <br></br>
//             <button onClick={()=>setTheme(prev=>!prev)}> change theme </button>
//             <div style={themeStyles}>{updateNum}</div>
//         </>
//     )
// }

// function numFunct(num){
//     for(let i=0;i<=1000;i++){
//         return num*2
//     }
// }


import React,{useState,useMemo} from "react";

export default function UseMemoFunction(){
    const [count,setCount]=useState(0)
    const [theme,setTheme]=useState(false)

    const double =useMemo(()=>{
        return updatedFunction(count)
    },[count])

    let setThemes ={
        backgroundColor: theme? 'black' :'grey',
        color:theme ? 'white' :'black'
    }
    return (
        <>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
            <button onClick={()=>setTheme(p=>!p)}>change</button>
            <div style={setThemes}>{double}</div>
        </>
    )
}
const updatedFunction =function(num){
    for(let i=0;i<1000;i++){}
        return num *2
}












////////////////////////

// import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'

// const Practice = () => {
//   const [num,setNum]=useState(0)
//   const square =useMemo(()=>{
//     return num * num 
//   },[num])
//   return (
//     <div>
//     <p>{square}</p>
//     <input type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
//     </div>
//   )
// }

// export default Practice
