import React, { useState } from 'react'

const useCopy = () => {
    const [copy,setCopy]=useState(false)
    function handleCopy(data){
        navigator.clipboard.writeText(data)
        setCopy(true)
        setTimeout(()=>setCopy(false),1500)
    }
  return [copy,handleCopy]
}

export default useCopy
