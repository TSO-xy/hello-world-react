import React, { Component } from 'react';
import Hello from './Components/Hello.js';
import Button from './Components/Button.js';
import Result from './Components/Result.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { counter : 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JRL First React App</h1>
        </header>
        <Hello />
        <br />
        <p className="App-intro">
          Add some numbers!
        </p>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
