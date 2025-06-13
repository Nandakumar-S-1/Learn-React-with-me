import React,{useState,useMemo} from "react";
export default function hookFunction(){
    const [number,setNumber] =useState(0)
    const [theme,setTheme] =useState(false)
    let updateNum=useMemo(()=>{
        return numFunct(number)
    })
    const themeStyles ={
        backgroundColor:dark ? 'black' : 'white',
        
    }
    return (
        <>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>setTheme(prev=>!prev)}> change theme </button>
            <div style={themeStyles}>{updateNum}</div>
        </>
    )
}

