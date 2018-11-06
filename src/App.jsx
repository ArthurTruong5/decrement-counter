import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      negative: 0
    };
  }
  render() {
    const count = this.state.counter;
    let button;
    if (count < 0) {
      button = this.state.negative;
    } else {
      button = this.state.counter;
    }

    return (
      <div className="App" data-test="component-app">
        <h1>Button Game</h1>
        <h2 data-test="counter-display">The counter is currently {button}</h2>
        <button
          data-test="decrement-button"
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1
            })
          }
        >
          Click button
        </button>
      </div>
    );
  }
}

export default App;
