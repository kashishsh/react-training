import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Allow us to inject the global store
import { createStore } from 'redux';
import reducer from './store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
