import React, { Component } from 'react';
import App from '../App.js';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

export default Button;
