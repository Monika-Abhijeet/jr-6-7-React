import { Component, PureComponent } from "react";
import PureComp from "./pure";
import RegularComp from "./regular";

class ParentRegularPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monika",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Monika",
      });
    }, 3000);
  }

  render() {
    console.log("********** parent component render ***********");
    return (
      <div>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentRegularPure;
