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
class App extends Component {
  // state = {
  //   age: 21
  // }
  // constructor(props) {
  //   super(props);
  // }
  // onAgeUp = () => {
  //   this.setState({
  //     age: ++ this.state.age
  //   });
  // }
  // onAgeDown = () => {
  //   this.setState({
  //     age: -- this.state.age
  //   });
  // }
  render() {
    return (
      <div>
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
        <hr />
        <div> History : </div>
        {
          this.props.history.map(el => <li key={el.id} onClick={() => this.props.onDeleteItem(el.id)}>{el.age}</li>)
        }
      </div>
    );

  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1}),
    onDeleteItem: (id) => dispatch({ type: 'DELETE_ITEM', key: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

