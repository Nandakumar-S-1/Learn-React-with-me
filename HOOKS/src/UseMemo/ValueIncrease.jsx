import React, { useMemo, useState } from 'react';

const ValueIncrease = () => {
  const [input, setInput] = useState(0);
  const [value, setValue] = useState(0);

const cube = useMemo(() => {
    console.log(' cube calculated');
    return input * input * input;
  }, [input]);

  const handleValueIncrease = () => {
    console.log('value increased');
    setValue((p) => p + 1);
  };

  const handleInput = (e) => {
    console.log(' input handled');
    setInput(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Value: {value}</h2>
      <button onClick={handleValueIncrease}>Increase Value</button>

      <hr />

      <h2>Input: {input}</h2>
      <input type="number" onChange={handleInput} />

      <h1>Cube of {input} is {cube}</h1>
    </div>
  );
};

export default ValueIncrease;
