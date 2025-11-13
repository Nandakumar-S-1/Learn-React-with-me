import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const setTrue = () => setOnline(true);
    const setFalse = () => setOnline(false);

    window.addEventListener("online", setTrue);
    window.addEventListener('offline', setFalse);

    return () =>{
        window.removeEventListener('online',setTrue)
        window.removeEventListener('offline',setFalse)
    }
  },[]);

  return online
};

export default useOnlineStatus;
