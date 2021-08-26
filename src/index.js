import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import store
import { createStore } from 'redux'
// How to connect redux with our React app -> import Provider and wrap the App with it, Provider takes in store prop store=store
import {Provider} from 'react-redux'

// import allReducers to be passed in createStore() (when it is index, you don't have to write index)
import allReducers from './reducers'

// init store, pass in allReducers
const store = createStore(allReducers, + window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

// display store in console
// store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
