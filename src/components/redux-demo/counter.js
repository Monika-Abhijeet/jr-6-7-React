import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../react-redux/actions";
function CounterRedux() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux demo</h1>
      <h3>Count: {counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}> decrement</button>
    </div>
  );
}

export default CounterRedux;
