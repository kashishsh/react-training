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








