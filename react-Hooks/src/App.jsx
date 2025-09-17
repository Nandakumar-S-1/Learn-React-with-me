import './App.css'
import LazyLoading from './Lazy/LazyLoading'

function App() {
return(
  <>
<LazyLoading/>
  </>
)
}

export default App

















// import React, { createContext, useContext, useState } from 'react';

// const CounterContext = createContext();

// function CounterProvider({ children }) {
//   const [count, setCount] = useState(0);
//   return (
//     <CounterContext.Provider value={{ count, setCount }}>
//       {children}
//     </CounterContext.Provider>
//   );
// }

// function Counter() {
//   const { count, setCount } = useContext(CounterContext);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <CounterProvider>
//       <Counter />
//     </CounterProvider>
//   );
// }
// export default App;