import "./App.css";
import UseState from "./useState/useState";

function App() {
  return (
    <>
      <UseState />
    </>
  );
}

export default App;

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
