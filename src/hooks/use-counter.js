import { useState, useEffect } from 'react';

// The function name MUST start with 'use' when creating a custom hook
const useCounter = (forwards = true) => { // Accepting the param 'forward' with a default value of true
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      };
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  // 'forwards' is a dependency because
  // it's not defined inside the effect function and
  // it's not defined outside our custom hook (we receive it as a parameter)

  return counter;
};

export default useCounter;
