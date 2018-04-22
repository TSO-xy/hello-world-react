import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react';
import App from '../App.js';

class Hello extends React.Component {
  state = { isHidden: true }

  showText () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.showText.bind(this)} >
          Say Hello!
        </button>
        {!this.state.isHidden && <Child />}
      </div>
    )
  }
}

const Child = () => (
<div className='helloWorld'>
      Hello, World!
  </div>
)

const app = document.getElementById('app')

export default Hello;
