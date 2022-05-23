import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);
  let focusMyInput = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "Hey i am setting the value";
  };
  return (
    <div>
      <h3>Use ref dmeo</h3>
      <input type="text" ref={inputRef} />
      <button onClick={() => focusMyInput()}>Focus</button>
    </div>
  );
}

export default UseRefDemo;
