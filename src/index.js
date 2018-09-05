import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Allow us to inject the global store
import { createStore, applyMiddleware } from 'redux';

import reducer from './store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CustomMiddleware from './CustomMiddleware';


const store = createStore(reducer, applyMiddleware(CustomMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
