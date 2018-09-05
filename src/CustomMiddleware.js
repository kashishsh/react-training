export default (store) => {
  return next => {
    return action => {
      const result = next(action);

      console.log(`Caught is middleware, JSON.stringify(${result})`);
    }
  }
}
