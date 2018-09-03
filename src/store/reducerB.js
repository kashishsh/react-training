const initialState = {
  b: 1
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'UPDATE_B':
      return {
        ...state,
        b: state.b + action.a
      }
      break;
    default:
      break;
  }

  return state;
}

export default reducer;
