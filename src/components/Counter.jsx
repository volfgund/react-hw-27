const Counter = ({ count, dispatch }) => {
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });
  
    return (
      <div className="counter">
        <p>Count: {count}</p>
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    );
  };
  
  export default Counter;