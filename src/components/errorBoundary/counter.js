import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

function Counter() {
  const [count, setCount] = useState(0);

  let handleError = useErrorHandler();
  let incrementCounter = () => {
    try {
      if (count === 5) {
        throw new Error("count limit exceeded");
      } else {
        setCount(count + 1);
      }
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => incrementCounter()}>INCREMENT</button>
    </div>
  );
}

export default Counter;
