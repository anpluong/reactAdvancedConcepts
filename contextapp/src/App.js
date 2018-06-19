import React, { Component } from "react";
import "./App.css";
import NumberContext from "./context";

class App extends Component {
  state = {
    number: 0
  };

  onIncHandler = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  onDecHandler = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  
  render() {
    return (
      <div className="App">
        <NumberContext.Provider value={this.state.number}>
          <Counter />
        </NumberContext.Provider>

        <button onClick={this.onIncHandler} className="btn">
          Increment
        </button>
        <button onClick={this.onDecHandler} className="btn">
          Decrement
        </button>
      </div>
    );
  }
}

function Counter(props) {
  return (
    <NumberContext.Consumer>{val => <h1>{val}</h1>}</NumberContext.Consumer>
  );
}


export default App;