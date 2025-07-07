import React,{useState} from "react"
export default function GetMessage() {
    const [input,setInput]=useState('')
    const [mes,setMes]=useState('')

    function handleMessage(){
        setMes(input)
    }
    
    return(
        <div>
            <h2>Message is : {mes}</h2>
            <input type="text" placeholder="Enter your message" value ={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleMessage}>get</button>
        </div>
    )
}