import { useContext } from "react";
import { AppContext } from "./useContext";
function Login() {
  const { setUsername, name, email } = useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <p>login comp:{name}</p>
      <p>login comp:{email}</p>
    </div>
  );
}

export default Login;
