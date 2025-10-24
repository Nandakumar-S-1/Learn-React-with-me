import React from "react";
import Practice from "./Practice";
import Parent from "./Store/Components/Parent";
import Child from "./Store/Components/Child";
import SpecialCounterWithUserName from "./Practice/useEffect/SpecialCounterWithUserName";


const App = () => {
  return <div>
    {/* <Parent/>
    <Child/> */}
    <SpecialCounterWithUserName/>
  </div>
};

export default App;
