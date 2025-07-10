import React,{Suspense, useState} from 'react'

const Contact =React.lazy(()=>import('./Contact'))
const Login = React.lazy(()=>import('./login'))

const LazyLoading = () => {
    const [load,setLoad] =useState('home')

  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>setLoad('contact')}>Contact</button>
        <button onClick={()=>setLoad('login')}>Login</button>

        <Suspense fallback={<h3>loading...</h3>}>
        {load=='contact' && <Contact/>}
        {load=='login' && <Login/>}
        </Suspense>
    </div>
  )
}

export default LazyLoading





























