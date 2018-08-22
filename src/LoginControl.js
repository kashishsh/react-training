import React, { Component } from 'react';
import ConditionalRendering from './ConditionalRendering';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }
  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>Logout</button>
    } else {
      button = <button onClick={this.handleLoginClick}>Login</button>
    }

    return (
      <div>
        <ConditionalRendering isLoggedIn={isLoggedIn}/>
        {button}
        <div>
          The user is { isLoggedIn ? 'currently' : 'not' } logged in...
        </div>
      </div>
    );
  }
}

export default LoginControl;
