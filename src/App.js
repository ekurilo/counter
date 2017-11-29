
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({count}) => (
  <div>
    {count}
  </div>
);

class App extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  };

  handleDecrement = () => {
    this.setState({count: this.state.count - 1})
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <Counter count={this.state.count}/>
        <button onClick={this.handleDecrement}>-</button>
      </div>

    );
  }
}

export default App;
