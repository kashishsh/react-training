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






class App extends Component {
  messages = [
    'Test',
    'Test 2',
    'Re: Test2'
  ];
  render() {
    return (
      <div>
        <LoginControl />
        <MailBox unreadMessages={this.messages}/>
        <Page />
      </div>
    );

  }
}

export default App;

