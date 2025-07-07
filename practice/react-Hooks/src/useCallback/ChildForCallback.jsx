//useCallback is a React hook used to memoize functions — it returns a cached version of a callback function that only changes if one of its dependencies changes.
// when  pass functions as props to child components, especially when those children are wrapped with React.memo, to prevent them from unnecessarily re-rendering."



import React, { useCallback, useState } from 'react'
import UseCallback from './UseCallback1'

function ChildForCallback() {
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(1000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
  return (
    <div>
        <p>{salary}</p>
        <p>{age}</p>
        <button onClick={()=>setSalary(salary+1000)}>add salary</button>
        <UseCallback incrementAge={incrementAge}/>
    </div>
  )
}

export default ChildForCallback
