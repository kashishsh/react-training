import { combineReducers } from 'redux';

import reducerA from './reducerA';
import reducerB from './reducerB';

const reducer = combineReducers({
  rA: reducerA,
  rB: reducerB
});

export default reducer;

