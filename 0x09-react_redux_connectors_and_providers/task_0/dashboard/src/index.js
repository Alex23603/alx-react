// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer

// Create the Redux store with uiReducer
const store = createStore(
  uiReducer,
  // Add any middleware if needed (e.g., applyMiddleware(...middleware))
);

// Render the App wrapped with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
