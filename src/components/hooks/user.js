import { useContext } from "react";
import { AppContext } from "./useContext";

function User() {
  const { username, name, email } = useContext(AppContext);
  return (
    <div>
      {" "}
      Username: {username}
      <p>Usercomp : {name}</p>
      <p>Usercomp: {email}</p>
    </div>
  );
}

export default User;
