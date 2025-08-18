import React, { useEffect, useState } from 'react'

const UseStrChange = () => {
  const [str,setStr]=useState('nandu')
  useEffect(()=>{
    let output= str.split('').map((char,ind)=>ind%2===0 ? char.toUpperCase(): char.toLowerCase()).join('')
    setStr(output)
  },[str])
  console.log(str);
  
  return (
    str
  )
}

export default UseStrChange
