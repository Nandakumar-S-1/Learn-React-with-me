import React from 'react'

function HOCwithProp(Wrap){
  return function Enhance(props){
    let enhanced = {age:23}
    return <Wrap {...props} {...enhanced}/>
  }
}

function Data({name,age}){
    return (
        <>
            <h2>name is {name}</h2>
            <h3>age is {age}</h3>
        </>
    )
}

export default HOCwithProp(Data)