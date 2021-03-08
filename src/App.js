
import './App.css';
import React, {useState} from 'react'

const App=()=> {
  const [count, setCount] = useState(0)//state var we start at 0
  const incrementCount = () => {
    setCount(count + 1)//function to increment state 
  }
/// return butt while calling onclick with theh incrementCount being called
  return (
    <button onClick={incrementCount}>
      i was clicked {count}
    </button>
  );
}

export default App;
