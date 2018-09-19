import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleIncrement}> increment </button>
        <button onClick={this.handleDecrement}> decrement </button>
      </div>
    );
  }
}

export default Counter;
