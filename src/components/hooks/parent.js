import UseReducerDemo from "./useReducer";
import UseStateDemo from "./useState";
function ParentHook() {
  return (
    <div>
      <h1>Demo of all hooks</h1>
      <UseStateDemo />
      <h2>useReducer</h2>
      <UseReducerDemo />
    </div>
  );
}
export default ParentHook;
