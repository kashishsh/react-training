- JSX:
  -JSX is a syntax extension to javascript. JSX produces react elements.
  - You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
  - Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.For example, class becomes className in JSX, and tabindex becomes tabIndex.
  - If a tag is empty, you may close it immediately with />, like XML:
    const element = <img src={user.avatarUrl} />;
  - JSX Prevents Injection Attacks:
    - It is safe to embed user input in JSX:
    - const title = response.potentiallyMaliciousInput;
      // This is safe:
      const element = <h1>{title}</h1>;
  - By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

  - Babel compiles JSX down to React.createElement() calls.
  - const element = (
      <h1 className="greeting">
        Hello, world!
      </h1>
    );
    it will be compiled to
      const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
      );

- Rendering elements:
  - Elements are the smallest building blocks of React application.
  - An element describe what you see on the screen.
    const element = <h1>Hello, world</h1>;
  - Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

- Rendering an Element into the DOM:
  Let’s say there is a <div> somewhere in your HTML file:
    <div id="root"></div>
  We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
  To render a React element into a root DOM node, pass both to ReactDOM.render():
    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));

- Updating the Rendered Element
  React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
  With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }

  setInterval(tick, 1000);

- React Only Updates What’s Necessary
  React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.



















