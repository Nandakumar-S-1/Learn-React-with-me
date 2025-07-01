import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounerUseState } from './useState.jsx'
// import UseMemoFunction from './useMemo.jsx'
import FunctionUseRef from './useRef.jsx'
import WindowResize from './useEffect.jsx'
import ComponentA from './ComponentA.jsx'
import UseReducer from './useReducer.jsx'
import UseContextFun from './useContext.jsx'
import CreateContextFun from './CreateContext.jsx'
import LazyLoading from './LazyLoading.jsx'
import {HomeLazyLoader,UseContextFunction,ReactMemoParent,UseReducer1,UseMemoFunction,MemoExampleFunction,ToggleButton,ContextExample,UseRefExample} from './AllInOne.jsx'
import ChildForCallback from './childForCallback.jsx'

function App() {
return(
  <div>
    {/* <CounerUseState/> */}
    {/* <UseMemoFunction/> */}
    {/* <FunctionUseRef/> */}
  {/* <WindowResize/> */}
  {/* <ComponentA/> */}
  {/* <UseReducer/> */}


  {/* <CreateContextFun>
    <UseContextFun/>
  </CreateContextFun> */}

    {/* <LazyLoading/> */}
    {/* <HomeLazyLoader/> */}





{/*/////////////////////////// all in one /////////////////////////*/}

  {/* <HomeLazyLoader/> */}

  {/* <UseReducer1/> */}
    {/* <ChildForCallback/> */}
    {/* <UseContextFunction/> */}
    {/* <UseMemoFunction/> */}
    {/* <MemoExampleFunction/> */}
        {/* <ToggleButton/> */}
    {/* <ContextExample/> */}
    {/* <UseRefExample/> */}
    {/* <ReactMemoParent/> */}
  {/* <ReducerFunction/> */}
  </div>
)
}

export default App
