import "./header.css";

function Header(props) {
  return (
    <div className="header-container d-flex flex-column justify-content-center align-items-center">
      <h3>{props.title}</h3>
      <h5>{props.subtitle}</h5>
    </div>
  );
}

export default Header;
