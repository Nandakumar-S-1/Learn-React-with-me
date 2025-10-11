// // import React, { useState } from 'react';

// // const HOC = (Component) => {
// //   return function UpdatedComp(props) {
// //     const [count, setCount] = useState(0);

// //     const handleClick = () => {
// //       setCount((prev) => prev + 1);
// //     };

// //     return <Component {...props} count={count} handleClick={handleClick} />;
// //   };
// // };

// // export default HOC;


// import React from 'react'

// const HOC = (wrapped) => {
//   return function updated(prop){
//     const newProp={...prop,name:prop.name||'guest'}
//     return <wrapped {...newProp}/>
//   }
  
// }

// export default HOC
