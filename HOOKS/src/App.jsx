import React from 'react'
import ReducerContext from './UseContext/ReducerContext'
import ChildContext from './UseContext/ChildContext'


const App = () => {
  return (
    <div>
      {/* <CounterReducer/> */}
      <ReducerContext>
        <ChildContext/>
      </ReducerContext>
    </div>
  )
}

export default App
