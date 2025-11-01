  //  // Child to parent pass data
  //  import React from 'react'
   
  //  const Child = (prop) => {

  //    return (
  //      <div>
  //        <button onClick={()=>prop.message('hello')}>sent</button>
  //      </div>
  //    )
  //  }
   
  //  export default Child
   




import React from 'react'

const Child = ({handle}) => {
  let mes='hello world'
  return (
    <div>
      <h4>Child</h4>
      <button onClick={()=>handle(mes)}>sent</button>
    </div>
  )
}

export default Child








  // import React from 'react'
  
  // const Child = ({sendData}) => {
  //   const data='hello from child'
  //   return (
  //     <div>
  //       <h2>child</h2>
  //       <button onClick={()=>sendData(data)}>to Parent</button>
  //     </div>
  //   )
  // }
  
  // export default Child
  