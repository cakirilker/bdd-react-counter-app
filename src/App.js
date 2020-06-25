import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="increment" type="button" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button id="decrement" type="button" onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
        <Counter counter={counter}></Counter>
      </header>
    </div>
  );
}

export default App;
