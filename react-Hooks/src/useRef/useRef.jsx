import React, { useEffect,useRef, useState } from 'react'

export default function FunctionUseRef(){
    const [name,setName]=useState('')
    const renderCount =useRef(0)

    useEffect(()=>{
        renderCount.current=renderCount.current +1
    })
    return(
        <>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <h2>name is {name}</h2>
        
        <h2> rendered {renderCount.current} times</h2>
        </>
    )
}