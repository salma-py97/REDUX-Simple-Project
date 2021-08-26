import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import store
import {createStore} from 'redux'

// --------------------------------------------------------------------------------------------------
// REDUX STEPS :
// STORE --> state of all components
// ACTION --> FUNCTION (uncalled/ function declaration) (ex: INCREMENT)
// REDUCER --> how the actions transform the current state to another state (ex : counter)
// DISPATCH --> executes action (calls function)
// --------------------------------------------------------------------------------------------------

// init store
// let store = createStore(reducer) --> reducer = counter (see below at the end)

// Action INCREMENT & DECREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER -> counter
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT" : 
      return state + 1

      // {
      //   state: state + 1
      // }

    case "DECREMENT" : 
      return state - 1

      // {
      //   state: state - 1
      // }

    default:
      return state
  }
}

// passing the reducer (the counter) in createStore()
  let store = createStore(counter)

// display store in console
store.subscribe(() => console.log(store.getState()))

// DISPATCH to execute actions
store.dispatch(increment()) // 1
store.dispatch(decrement()) // 0
store.dispatch(decrement()) // -1
store.dispatch(decrement()) // -2
store.dispatch(decrement()) // -3



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
