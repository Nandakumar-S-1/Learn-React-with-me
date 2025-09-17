import React from "react";

export default function RefComp() {
  const ref = React.useRef();
  return (
    <>
      <input type="checkbox" ref={ref} />
      <button onClick={() => (ref.current.checked = !ref.current.checked)}>
        Toggle
      </button>
    </>
  );
}
