import React,{useState} from 'react'

const Contact =React.lazy(()=>import('./Lazy/Contact'))
const Login = React.lazy(()=>import('./Lazy/login'))

const LazyLoading = () => {
    const [load,setLoad] =useState('home')

  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>setLoad('contact')}>Contact</button>
        <button onClick={()=>setLoad('login')}>Login</button>

        {load=='contact' && <Contact/>}
        {load=='login' && <Login/>}
    </div>
  )
}

export default LazyLoading





























