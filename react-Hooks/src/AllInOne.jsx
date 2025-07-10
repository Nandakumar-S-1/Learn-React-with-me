import React,{ createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Children } from 'react'

//Lazy Loading aka React.lazy
//Lazy Loading is a technique used to load components only when they are needed to be rendered.Not when the app starts
//React.lazy:-  dynamically imports a component only when it is rendered
//Suspence :- Is shows a fallback / Loading animation while the component is loading

const Contact = React.lazy(()=>import('./Lazy/Contact'))
const Login =React.lazy(()=>import('./Lazy/login'))

export const HomeLazyLoader=()=>{
    const [load,setLoad]=useState('home')
    return(
        
        <>
            <h1>{load}</h1>
            <button onClick={()=>setLoad('contact')}>Contact</button>
            <button onClick={()=>setLoad('login')}>Login</button>

            {load=='contact'&&<Contact/>}
            {load=='login' && <Login/>}
        </>
        
    )
}

/////////////////USE REDUCER////////////////////////////////////////////////////////////////////
// useReducer is actually an alternative to useState hook.
//It is basically used for the state management in Functional components . It is used over useState when the State management we need to implement is complex.
//It takes a Reducer function and an initial value as the argument
//dispatch is used to trigger the state updates by sending action object to reducer function

const initialState = 0
const reducer = (state,action)=>{
    switch(action.type){
        case '+':
            return state+1
        case '-':
            return state-1
        case 'reset':
            return initialState
        default :
            return state
    }
}

export const UseReducer1 =()=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'+'})}>+</button>
            <button onClick={()=>dispatch({type:'reset'})}>0</button>
            <button onClick={()=>dispatch({type:'-'})}>-</button>
        </div>
    )
}

///////////////////USE CONTEXT & CREATE CONTEXT//////////////////////////////////
//useContext is a hook that allow functional components to access data from an object without prop drilling
//first a context is created using React.createContext

export const ContextForReducer = createContext()
const initial  = 0
const reducerFun =(state,action)=>{
    switch(action.type){
        case '+':
            return state+1
        case '0':
            return initial
        case '-':
            return state-1
        default:
            return state
    }
}

export const CreateContextFunction=({children})=>{
    const [state,dispatch] =useReducer(reducerFun,initial)
    return(
        <>
            <ContextForReducer.Provider value={{state,dispatch}}>
                {children}
            </ContextForReducer.Provider>    
        </>
    )
}

export const UseContextFunction =()=>{
    const {state,dispatch}=useContext(ContextForReducer)
    return(
        <>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:'+'})}>+</button>
        <button onClick={()=>dispatch({type:'0'})}>0</button>
        <button onClick={()=>dispatch({type:'-'})}>-</button>
        </>
    )
}
/////////////////////////////////////////////////////////////
export const NamedContext =createContext()
function Child(){
    const name=useContext(NamedContext)
    return <p>hello, {name}</p>
}

export function ContextExample(){
    return (
        <NamedContext.Provider value='Nandu'>
            <Child/>
        </NamedContext.Provider>
    )
}




//////////////////////useMemo//////////////////////////////////
//It let us cache the result of a calculation between re-renders
//in simple words, it memoizes the result of a computation,which only recalculate only when the dependencies changes

export function UseMemoFunction(){
    const [count,setCount]=useState(0)
    const [theme,setTheme]=useState(false)

    const square =useMemo(()=>{
        return squareFunction(count)
    },[count])

    let setThemes ={
        backgroundColor:theme ? 'black' : 'white',
        color : theme ? 'white' :'black'
    }

    return (
        <>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <button onClick={()=>setTheme(p=>!p)}>change</button>
            <div style={setThemes}>{square}</div>
        </>
    )

} 
function squareFunction(num){
    for(let i=0;i<100000;i++){
        return num * num
    }
}


////////////////////////////////////////////
export const MemoExampleFunction=()=>{
    const [count,setCount] =useState(0)
    const Calculation = useMemo(()=>{
        console.log('calculation')
        return count * 3
    },[count])

    return (
        <>
            <p>count: {count}</p>
            <p>cube:{Calculation}</p>
            <button onClick={()=>setCount(count+1)}>add</button>
        </>
    )
}


/////////////////////////////////////////////////////////
export function ToggleButton(){
    const [on,setOn]=useState(false)
    const toggle=()=>{
        setOn(!on)
    }
    return (
        <>
            <button onClick={toggle}>{on?'on':'off'}</button>
        </>
    )
}


///////////////////////UseRef/////////////////////////
//use Ref is a way to access and modify DOM elements, The value will persist across renders without triggering re render

export function UseRefExample(){
    const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <input type='text' ref={inputRef}/>
    )
}


//////////////////////////////////////////////
// import React from 'react'
// import { useState } from 'react'
// import { useRef } from 'react'

// const Practice = () => {
//     const colors=['red','yellow','blue','green']
//     const colRef=useRef(null)
//     const [index,setIndex]=useState(0)
//     const changeColor =()=>{
//         const nextCol=colors[index]
//         colRef.current.style.color =nextCol
//         setIndex((index+1)%colors.length)
//     }
//   return (
//     <div>
//       <h2 ref={colRef}>Hello World</h2>
//       <button onClick={changeColor}>Click</button>
//     </div> 
//   )
// }

// export default Practice



//////////////////////////React.memo////////////////

import ReactMemoChild from './Lazy/reactMemoChild'

export const ReactMemoParent = () => {
  const [count,setCount]=useState(0)
    return (
    <div>
        <ReactMemoChild name={'Nandakumar'}/>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  ) 
}

//////////////////////////////////////

import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Practic = () => {
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(0)

        const square = useMemo(()=>{
            console.log('calculating square');
            return number*number
        },[number])
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <p>{square}</p>
      <button onClick={()=>setCount(p=>p+1)}>{count}</button>
    </div>
  )
}

export default Practic


///////////////////////////////////////////////////////////////

// // import React,{useReducer} from 'React'
// const initialVal =0
// export function reducer(state,action){
//   switch (action.type) {
//     case '+':
//       return state+1
//     case 'reset':
//       return initialVal
//     case '-':
//       return state-1
    
//     default:
//       return state
//   }
// }

// export const ReducerFunction=()=>{
//   const [state,dispatch] = useReducer(reducer,initialVal)
//   return (
//     <>
//         <h1>{state}</h1>
//         <button onClick={()=>dispatch({type:'+'})}>+</button>
//         <button onClick={()=>dispatch({type:'reset'})}>reset</button>
//         <button onClick={()=>dispatch({type:'-'})}>-</button>
//     </>  
//   )
// }


