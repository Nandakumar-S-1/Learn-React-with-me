import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data,setData]=useState(null)
    const [err,setErr]=useState(null)
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        async function fetchD() {
            try {
                let res= await fetch(url)
                if(!res.ok) throw new Error('Some error')
                let json=await res.json()
            setData(json)
            } catch (error) {
                setErr(error.message)
            }finally{
                setLoad(false)
            }
        }
        fetchD()
    },[url])
  return {data,err,load}
}

export default UseFetch
