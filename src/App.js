import React, { Component } from "react";

import "./styles/App.css";
import Counter from "./components/Counter";

let style = {
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div style={style}>
        <Counter />
      </div>
    );
  }
}

export default App;
