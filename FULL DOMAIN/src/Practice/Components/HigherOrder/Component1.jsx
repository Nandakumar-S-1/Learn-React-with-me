// import React from 'react';
// import HOC from './HOC';

// const Component1 = ({ count, handleClick }) => {
//   return (
//     <div>
//       <button onClick={handleClick}>Click {count}</button>
//     </div>
//   );
// };

// export default HOC(Component1);


import React from 'react'

const Component1 = (prop) => {
  return (
    <div>
      <h2>{prop} hello</h2>
    </div>
  )
}

export default Component1
