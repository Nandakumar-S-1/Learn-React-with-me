import React, { useEffect } from 'react'

const useClickOutside = (ref,callback) => {
    useEffect(()=>{
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)){
                callback()
            }
        }
        document.addEventListener('mousedown',handleClick)
        return () => document.addEventListener('mousedown',handleClick)
    },[ref,callback])
}

export default useClickOutside
