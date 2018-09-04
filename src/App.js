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
import { connect } from 'react-redux';
import ButtonOne from './components/ButtonOne';

class App extends Component {
  render() {
    return (
      <div>
          <ButtonOne disabled test="123"></ButtonOne>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rB.b
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({ type: 'UPDATE_A', b}),
    updateB: (a) => dispatch({ type: 'UPDATE_B', a})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

