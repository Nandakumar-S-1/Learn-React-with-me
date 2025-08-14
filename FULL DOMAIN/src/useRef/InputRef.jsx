import { useRef } from "react";

export default function TextInput() {
    console.log("rendered");
    
  const inputRef = useRef(null);
  //This stores a number (0) but won’t re-render the component when changed.
  const countRef = useRef(0);
//It calls the .focus() method on the DOM element, moving the cursor inside the input box without requiring state changes or re-renders.
  const focusInput = () => {
    inputRef.current.focus();
  };
  //countRef.current can be updated, and the new value persists across renders.
  // Unlike useState, updating a useRef value doesn’t cause a re-render.
  const incrementCount = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
