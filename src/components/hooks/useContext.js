import { useState, createContext } from "react";
import Login from "./login";
import User from "./user";

export const AppContext = createContext(null);
function UseContextDemo() {
  const [username, setUsername] = useState("");
  const name = "Monika";
  const email = "monika@gmail.com";
  return (
    <div>
      <h3>parent</h3>
      <AppContext.Provider value={{ username, setUsername, name, email }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}
export default UseContextDemo;
