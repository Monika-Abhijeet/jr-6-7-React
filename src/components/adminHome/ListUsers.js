import { useEffect, useState } from "react";
import axios from "axios";
function ListUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('"http://localhost:9009/users').then((response) => {
      setUsers(response.data);
    });
  });
  return (
    <div>
      <h1>Users list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;
