import React, { useEffect, useState } from 'react'

const SpecialCounterWithUserName = () => {
    const [count,setCount]=useState(0)
    const [user,setUser]=useState(null)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res=>res.json())
        .then(user=>setUser(user))
    },[count])
  return (
    <div>
      <h2>{count}</h2>
      {user&&<h2 key={user.count}>{user.name}</h2>}
      <button onClick={()=>setCount(count=>count+1)}>
            increase
      </button>
    </div>
  )
}

export default SpecialCounterWithUserName
