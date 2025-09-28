import React, { useState, memo } from "react";

// ✅ Child component wrapped in React.memo
const Child = memo(({ count }) => {
  console.log("Child re-rendered");
  return <h3>Child Count: {count}</h3>;
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>React.memo Example</h2>

      <Child count={count} /> {/* Only re-renders if "count" changes */}

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};

export default MemoExample;
