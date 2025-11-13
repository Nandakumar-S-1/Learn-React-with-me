import React, { useState } from 'react'

const App = () => {
  const [text,setText]=useState('')
  const [note,setNote]=useState([])

  function handle(e){
    if(e.key==='Enter' && text.trim()!==' '){
      setNote([...note,text])
      setText('')
    }
  }
  return (
    <div>
      <input type="text" placeholder='enter the task' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={handle}/>
      <p>{note.length}</p>
      <ul>
        {note.map((it,ind)=>(
          <li key={ind}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App