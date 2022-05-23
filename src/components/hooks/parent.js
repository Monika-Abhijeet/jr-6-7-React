import UseContextDemo from "./useContext";
import UseEffectDemo from "./useEffect";
import UseReducerDemo from "./useReducer";
import UseRefDemo from "./useRef";
import UseStateDemo from "./useState";
function ParentHook() {
  return (
    <div>
      <h1>Demo of all hooks</h1>
      <UseStateDemo />
      <h2>useReducer</h2>
      <UseReducerDemo />
      <UseEffectDemo title="hello world" />
      <UseRefDemo />
      <UseContextDemo />
    </div>
  );
}
export default ParentHook;
