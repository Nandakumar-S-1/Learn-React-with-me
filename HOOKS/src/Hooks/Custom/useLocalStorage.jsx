import React, { useState } from 'react'

const useLocalStorage = (key,init) => {
    const [value,setValue]=useState(()=>{
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : init
    })

    const setStoredVal = (newer) =>{
        setValue(value)
        localStorage.setItem(key,JSON.stringify(newer))
    }

    return [value,setStoredVal]
}

export default useLocalStorage
