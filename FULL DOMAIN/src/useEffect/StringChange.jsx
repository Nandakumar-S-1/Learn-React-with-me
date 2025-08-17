import React, { useState } from 'react'

const StringChange = (string) => {
    const [str,setStr]=useState('')
    useState(()=>{
      let res=string.split('').map((char,ind)=>(ind%2===0 ? char.toUpperCase() : char.toLowerCase)).join('')
      setStr(res)
    },[string])
  return str
}

export default StringChange