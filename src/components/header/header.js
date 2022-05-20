import "./header.css";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header-container d-flex flex-row justify-content-between align-items-center">
      <h3>{props.title}</h3>
      <ul
        className="d-flex flex-row justify-content-around"
        style={{ width: "30%" }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
