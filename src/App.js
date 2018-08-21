import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ComposingComponents from './ComposingComponents';
import Comment from './comment/Comment';
import Clock from './Clock';
import './App.css';




class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
        <Clock />
        <Clock />
      </div>
    );

  }
}

export default App;
