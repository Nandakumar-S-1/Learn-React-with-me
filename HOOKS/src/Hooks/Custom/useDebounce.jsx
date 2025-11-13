//Use case: Search inputs
import React, { useEffect, useState } from "react";

const useDebounce = (val, delay = 500) => {
  const [debounce, setDebounce] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => setDebounce(val), delay);
    return () => clearTimeout(timer);
  }, [val, delay]);
  return debounce;
};

export default useDebounce;
