import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)

  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  return (
    <React.Fragment>
      <p>{count}</p>
      <button style={{color: "green"}} className="buttons" onClick={increment}>Increment</button>
      <button style={{color: "red"}} className="buttons" onClick={decrement}>Decrement</button>
    </React.Fragment>
  );
}

export default App;
