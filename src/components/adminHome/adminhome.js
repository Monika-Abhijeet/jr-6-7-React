import { Link } from "react-router-dom";
function AdminHome() {
  return (
    <div>
      <ul>
        <Link to="list-users">
          <li>List users</li>
        </Link>
        <li> Add flight</li>
        <li>Add user</li>
      </ul>
    </div>
  );
}

export default AdminHome;
