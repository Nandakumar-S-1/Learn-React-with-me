// import React from 'react'
// import { useSelector , useDispatch} from 'react-redux'
// import { inc,dec,reset } from './Store/CounterSlice'


// const App = () => {
//   const count = useSelector((state)=>state.counter.value)
//   const dispatch =  useDispatch()
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>dispatch(inc())}>+</button>
//       <button onClick={()=>dispatch(reset())}>0</button>
//       <button onClick={()=>dispatch(dec())}>-</button>
//     </div>
//   )
// }

// export default App













import React from 'react'
import Parent from './Parent'

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App
