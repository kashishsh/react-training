import React, { Component, PureComponent } from 'react';
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




/*
  - In react, when you call setState method, re-rendering will happen and its kind of blind as it doesn't
    look that if you have really changed the value or not. And sometimes these updates are not needed.
    We can fix it using Pure components.
*/

function Temp(props) {
  console.log('Rendering myself');
  return <div>{props.val}</div>
}
class App extends PureComponent {
  state = {
    val: 1
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 }; //If the value is same, component should not update
        //return { val: Math.random() }
      });
    }, 2000);
  }
  // One way to stop rendering for the same value is to use shouldComponentLifecycle lifecycle hook
  // shouldComponentUpdate(nextProp, nextState) {
  //   return !(this.state.val === nextState.val);
  // }
  render() {
    return (
      <Temp val={this.state.val}/>
    );

  }
}

export default App;

