import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import ComposingComponents from './ComposingComponents';
import Comment from './comment/Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import ConditionalRendering from './ConditionalRendering';
import './App.css';
import LoginControl from './LoginControl';
import MailBox from './MailBox';
import Page from './Page';
import NumberList from './NumberList';
import NameForm from './NameForm';
import Fragments from './Fragments';





class App extends Component {
  numberList = [1,2,3,4];
  render() {
    return (
      <Fragments />
    );

  }
}

export default App;

