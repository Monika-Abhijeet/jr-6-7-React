import { Component } from "react";
function UpdatedComponent(OriginalCmp) {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <OriginalCmp
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
}

export default UpdatedComponent;
