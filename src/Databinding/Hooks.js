import React , { useState }from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
    <center>
    <h1>Hooks concept</h1>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    </center>
    </div>
  );
};

export default Hooks