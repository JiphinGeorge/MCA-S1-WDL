import React, { useState, useEffect } from 'react';
import './counter.css'; 

const Counter = () => {
  
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); 
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (

    <div className="container">
      <h2>Counter: {count}</h2>
      <div>
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
