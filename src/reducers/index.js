// when we wanted to init the store in index.js in src we couldn't because we have more than one reducer, we couldn't write

// let store = createStore(isLoggedReducer, counterReducer)

// there's is a solution called combineReducers()

// 1- import combineReducers() from redux
// 2- import all of our reducer here
// 3- create a variable that will represent all our reducers
// 4- set it equal to combineReducers which takes in an object with the name of the reducer and the reducer itself (see allReducers)
// if the name and the value is the same write it once (see rootReducers) (ES6)


import { combineReducers } from "redux";
import loggedReducer from './isLogged'
import counterReducer from './counter'


// const rootReducers = combineReducers({isLoggedReducer, counterReducer})

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
})

export default allReducers;



