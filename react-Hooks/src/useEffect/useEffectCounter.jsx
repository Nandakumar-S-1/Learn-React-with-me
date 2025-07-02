import React,{useState,useEffect} from 'react'

const UseEffectCounter = () => {
    const [count,setCount]=useState(0)

    function increment(){
        setCount(prev=>prev+1)
    }
    function decrement(){
        setCount(prev=>prev-1)
    }
    const reset =()=>setCount(0)

    useEffect(()=>{
        console.log(`count changed to ${count}`);
    },[count])

  return (
    <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default UseEffectCounter
