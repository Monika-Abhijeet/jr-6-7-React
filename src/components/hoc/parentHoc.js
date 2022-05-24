import ClickCounter from "./clickCounter";
import { Component } from "react";
import HoverCounter from "./hoverCounter";
class ParenHoc extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default ParenHoc;
