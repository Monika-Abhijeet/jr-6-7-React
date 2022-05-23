import { useEffect, useState, useLayoutEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);

  useEffect(() => {
    console.log("Use effect called");
  }, [count, multiply]);

  useLayoutEffect(() => {
    console.log("use layout effect called");
  }, [count]);

  return (
    <div>
      <h3>Use effect count:{count} </h3>
      <h3>multiply by 2: {multiply}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={() => setMultiply(multiply * 2)}> Multiply</button>
    </div>
  );
}

export default UseEffectDemo;
