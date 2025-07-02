import React, { useEffect, useState } from 'react'

const ReturnPurpose = () => {
    const [type,setType]=useState('number')
    useEffect(()=>{
        console.log('changing the type');
        return()=>{
            console.log('return cleanup');
        }
    },[type])
  return (
    <div>
        <p>{type}</p>
        <button onClick={()=>setType('string')}>n</button>
        <button onClick={()=>setType('number')}>s</button>
        <button onClick={()=>setType('boolean')}>b</button>
    </div>  )
}

export default ReturnPurpose
