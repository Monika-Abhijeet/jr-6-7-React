import { Component } from "react";
import ChildLifecycle from "./child-lifecycle";

class ParentLifecycle extends Component {
  constructor() {
    console.log("Parent constructor");
    console.log("******************************");

    super();
    this.state = {
      mount: true,
    };
  }
  componentDidMount() {
    console.log("Parent component did mount");
    console.log("******************************");
  }
  render() {
    console.log("parent render ");
    console.log("******************************");
    return (
      <div>
        <h1>Parent Component</h1>
        {this.state.mount ? <ChildLifecycle /> : null}
        <button
          onClick={() => this.setState({ mount: true })}
          disabled={this.state.mount}
        >
          Mount
        </button>
        <button
          onClick={() => this.setState({ mount: false })}
          disabled={!this.state.mount}
        >
          Unmount
        </button>
      </div>
    );
  }
}

export default ParentLifecycle;
