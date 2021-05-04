import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainClass from "./components/mainClass";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainClass />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
