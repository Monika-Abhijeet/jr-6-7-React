import { Component } from "react";
import "./sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "old title",
      name: "hi",
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

  changeName = (e) => {
    this.setState({ name: e.target.value });
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
        <button
          className="btn btn-warning"
          onClick={() => this.setState({ title: this.props.title })}
        >
          Change Title
        </button>
        <button className="btn btn-info" onClick={this.props.getName}>
          print name
        </button>
        <div>
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={(e) => {
              this.changeName(e);
            }}
          />
        </div>
        My name is {this.state.name}
      </div>
    );
  }
}

export default Sidebar;
