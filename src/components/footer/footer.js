import { Component } from "react";
import "./footer.css";
// export default Footer;

class Footer extends Component {
  render() {
    return (
      <div className="footer-container d-flex justify-content-around">
        <div>email : {this.props.email}</div>
        <div>address : {this.props.address}</div>
      </div>
    );
  }
}

export default Footer;
