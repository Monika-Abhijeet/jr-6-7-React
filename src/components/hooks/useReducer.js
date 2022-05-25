import { useReducer } from "react";

function UseReducerDemo() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "MULTIPLY":
        return {
          count: state.count * action.num,
        };
    }
  };
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "MULTIPLY", num: 5 })}>
        MULTIPLY
      </button>
    </div>
  );
}

export default UseReducerDemo;
