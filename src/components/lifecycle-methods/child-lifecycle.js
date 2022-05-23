import { Component } from "react";

class ChildLifecycle extends Component {
  constructor() {
    super();
    console.log("Child constructor");
    console.log("******************************");
  }
  componentDidMount() {
    console.log("Child component did mount");
    console.log("******************************");
  }
  componentWillUnmount() {
    console.log("child component unmounted");
    console.log("******************************");
  }
  render() {
    console.log("child render");
    console.log("******************************");

    return (
      <div>
        <h1>Child component</h1>
      </div>
    );
  }
}

export default ChildLifecycle;
