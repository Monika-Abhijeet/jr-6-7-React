import { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "old title",
    };
  }
  alertMe = () => {
    alert("Hiiiii!!!!");
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  changeTitle = () => {
    this.setState({ title: this.props.title });
  };
  render() {
    return (
      <div className="sidebar-container">
        <h1>{this.state.title}</h1>
        <h3>Count: {this.state.count}</h3>
        <p onClick={this.alertMe}>ALert</p>
        <button className="btn btn-success" onClick={this.increment}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={this.decrement}>
          Decrement
        </button>
        <button className="btn btn-warning" onClick={this.changeTitle}>
          Change Title
        </button>
      </div>
    );
  }
}

export default Sidebar;
