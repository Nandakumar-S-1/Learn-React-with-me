import React, { useMemo, useState } from 'react';

const UseMemoCalc = () => {
  const [value, setValue] = useState(0); 
  const [input, setInput] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");
    return input * input;
  }, [input]);

  const handleValueIncrease = () => {
    setValue(prev => prev + 1);
  };

  const handleInputChange = (e) => {
    setInput(Number(e.target.value));
  };


  return (
    <div >
      <h1>useMemo Square Calculator</h1>

      <input 
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />

      <p >Square of {input}: <strong>{square}</strong></p>

      <button
        onClick={handleValueIncrease}
      >
        Re-render Counter: {value}
      </button>
    </div>
  );
};

export default UseMemoCalc;
