import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, logIn, logOut} from './actions'

function App() {
  // pulling from state
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)

  // use dispatch
  const dispatch = useDispatch()


  return (
    <div className="App">
      
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(decrement(20))}>-20</button> <button onClick={() => dispatch(decrement(1))}>-</button> <button onClick={() => dispatch(increment(1))}>+</button> <button onClick={() => dispatch(increment(5))} >+5</button> <button onClick={() => dispatch(increment(10))} >+10</button>
      <br />
      {isLogged && <p>if loggedIn is true, this text will show</p>}
      <button onClick={() => dispatch(logIn())}>log in</button> <button onClick={() => dispatch(logOut())}>log out</button>
    </div>
  );
}

export default App;
