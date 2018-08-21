import React, { Component } from 'react';
/*
  - Class component should always call the base constructor with props.
  - We will set a timer whenever the clock is rendered to the DOM for the first time. This is called
    mounting in react.
  - We also want to clear the timer whenever the DOM produced by Clock is removed. This is called
    "unmounting" in React.
  - We can declare special methods on the component class to run some code when a component mounts and
    unmounts, these methods are called lifecycle hooks.
  - The componentDidMount() hook runs after the component output has been rendered to the DOM.
    This is a good place to set up a timer
  - While this.props is set up by React itself and this.state has a special meaning, you are free to
    add additional fields to the class manually if you need to store something that doesn’t participate
    in the data flow (like a timer ID).
  - Let’s quickly recap what’s going on and the order in which the methods are called:
      1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock
         component. Since Clock needs to display the current time, it initializes this.state with an
         object including the current time. We will later update this state.
      2. React then calls the Clock component’s render() method. This is how React learns what should
         be displayed on the screen. React then updates the DOM to match the Clock’s render output.
      3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook.
         Inside it, the Clock component asks the browser to set up a timer to call the component’s tick()
         method once a second.
      4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI
         update by calling setState() with an object containing the current time.
         Thanks to the setState() call, React knows the state has changed, and calls the render()
         method again to learn what should be on the screen. This time, this.state.date in the render()
         method will be different, and so the render output will include the updated time.
         React updates the DOM accordingly.
      5. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount()
         lifecycle hook so the timer is stopped.
*/

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello world!!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
