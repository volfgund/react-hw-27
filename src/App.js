import React, { useReducer } from 'react';
import './components/Counter.css';
import Counter from './components/Counter';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Counter</h1>
      <Counter count={state.count} dispatch={dispatch} />
    </div>
  );
};

export default App;