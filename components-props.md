- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Functional components:
  - The simplest way to define a component is to write a JavaScript function:
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  - This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.

- Class bases components:
  - You can also use an ES6 class to define a component:
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

- Rendering a Component:
  - Previously, we only encountered React elements that represent DOM tags:
    const element = <div />;
  - However, elements can also represent user-defined components:
    const element = <Welcome name="Sara" />;
  - When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    Let’s recap what happens in this example:

    1. We call ReactDOM.render() with the <Welcome name="Sara" /> element.
    2. React calls the Welcome component with {name: 'Sara'} as the props.
    3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
    4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

  - Note: Always start component names with a capital letter.
    React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

  - Composing components:
    - Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

  - Props are Read-Only
    - Whether you declare a component as a function or a class, it must never modify its own props.   Consider this sum function:
      function sum(a, b) {
        return a + b;
      }
      Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
      In contrast, this function is impure because it changes its own input:
      function withdraw(account, amount) {
        account.total -= amount;
      }
    - All React components must act like pure functions with respect to their props.














