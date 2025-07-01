import React,{ useEffect, useState } from "react";

export default function WindowResize(){
    const [windowSize,setWindowSize] =useState({
        width:typeof window !== 'undefined' ? window.innerWidth : 0,
        height:typeof window !== 'undefined' ? window.innerHeight :0
    })
    useEffect(()=>{
        const handleResize =()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])
    return(
        <div>
            <p>window : {windowSize.width} x {windowSize.height}</p>
        </div>
    )
}