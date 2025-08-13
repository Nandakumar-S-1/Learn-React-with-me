//Communication between two siblings value inputed in the sibling 1 will be shown in siblling 2

import React, { useState } from 'react'
import { Sibling1 } from './Sibling1'
import { Sibling2 } from './Sibling2'

const Parent = () => {
    const [value,setValue]=useState('')
  return (
    <>
      <Sibling1 onChange={setValue}/>
      <Sibling2 value={value}/>
    </>
  )
}

export default Parent











// // Parent
// export const Parent = () => {
//   const [value, setValue] = useState('');
//   return (
//     <>
//       <SiblingOne onChange={setValue} />
//       <SiblingTwo value={value} />
//     </>
//   );
// };

// // SiblingOne
// const SiblingOne = ({ onChange }) => (
//   <input type="text" onChange={e => onChange(e.target.value)} />
// );

// // SiblingTwo
// const SiblingTwo = ({ value }) => <span>{value}</span>;
