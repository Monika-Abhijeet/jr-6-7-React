import { Component } from "react";

// export default Footer;

class Footer extends Component {
  render() {
    return (
      <div>
        <div>{this.props.email}</div>
        <div>{this.props.address}</div>;
      </div>
    );
  }
}

export default Footer;
