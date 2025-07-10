import React, { useRef, useState } from 'react';

const Comparison = () => {
  let jsVar = 0
  const [stateVar, setStateVar] = useState(0);
  const refVar = useRef(0);

  console.log('Rendering...');

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3>JS Variable: {jsVar}</h3>
        <button onClick={() => { jsVar += 1; console.log("JS Var:", jsVar); }}>
          Update JS Var
        </button>
      </div>

      <div className="mb-4">
        <h3>State Variable: {stateVar}</h3>
        <button onClick={() => setStateVar(stateVar + 1)}>
          Update State
        </button>
      </div>

      <div>
        <h3>Ref Variable: {refVar.current}</h3>
        <button onClick={() => { refVar.current += 1; console.log("Ref:", refVar.current); }}>
          Update Ref
        </button>
      </div>
    </div>
  );
};

export default Comparison;
