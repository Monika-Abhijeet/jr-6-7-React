import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Use state demo</h1>
      <h3>Count : {count}</h3>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStateDemo;
