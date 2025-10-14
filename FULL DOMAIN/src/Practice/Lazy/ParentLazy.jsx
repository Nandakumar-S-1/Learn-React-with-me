import React, { lazy, Suspense, useState } from "react";
const Component1 = lazy(() => import("./Component1"));
const Component2 = lazy(() => import("./Component2"));

const ParentLazy = () => {
  const [comp, setComp] = useState("component1");
 const handleComponent =()=>{
    setComp(p=>(p==="component1" ? "component2" : "component1"));
 }
  return (
    <>
      <h1>Lazy Component</h1>
      {comp === "component1" && (
        <Suspense fallback={<h2 style={{color:'red'}}>Component 1 is Loading...</h2>}>
          <Component1 />
        </Suspense>
      )}
      {comp === "component2" && (
        <Suspense fallback={<h2 style={{color:'blue'}}>Component 2 is Loading...</h2>}>
          <Component2 />
        </Suspense>
      )}
      <button onClick={handleComponent}>change</button>
    </>
  );
};

export default ParentLazy;
