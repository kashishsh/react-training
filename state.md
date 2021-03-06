- Using state correctly:
  There are three things you should know about setState():
    - Do not modify state directly:
      For example, this will not re-render a component:
        // Wrong
        this.state.comment = 'Hello';

        Instead, use setState():
        // Correct
        this.setState({comment: 'Hello'});
      The only place where you can assign this.state is the constructor

    - State Updates May Be Asynchronous
      - React may batch multiple setState() calls into a single update for performance.
        Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
      - For example, this code may fail to update the counter:
        // Wrong
        this.setState({
          counter: this.state.counter + this.props.increment,
        });
      - To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
        // Correct
        this.setState((prevState, props) => ({
          counter: prevState.counter + props.increment
        }));

    - State Updates are Merged:
      - When you call setState(), React merges the object you provide into the current state.
      - For example, your state may contain several independent variables:
        constructor(props) {
          super(props);
          this.state = {
            posts: [],
            comments: []
          };
        }
      - Then you can update them independently with separate setState() calls:
        componentDidMount() {
          fetchPosts().then(response => {
            this.setState({
              posts: response.posts
            });
          });

          fetchComments().then(response => {
            this.setState({
              comments: response.comments
            });
          });
        }
      - The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.

    - The data flows down:
      - Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
      - This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
      - A component may choose to pass its state down as props to its child components.
      - The FormattedDate component would receive the date in its props and wouldn’t know whether it came from the Clock’s state, from the Clock’s props, or was typed by hand:
        function FormattedDate(props) {
          return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
        }
      - This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

- In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.

















