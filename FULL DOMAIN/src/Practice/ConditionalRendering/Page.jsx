import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import Login from "./Login";

const Page = () => {
  let content;
  const [isLogged,setIslogged] = useState(false)

  if (isLogged) {
    content=<AdminPanel/>
  }else{
    content=<Login/>
  }
  return <div>
  {content}
  <button onClick={()=>setIslogged(p=>!p)}>change</button>
  </div>;
};

export default Page;
