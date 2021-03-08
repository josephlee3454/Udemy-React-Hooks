
import './App.css';
import React, {useState} from 'react'

const App=()=> {
  const [count, setCount] = useState(0)//state var we start at 0

  const [light,setLight] = useState(false)



  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)//should now increment from the previous value 
  }

  const toggleLight = () => {
    setLight(prevLight => !prevLight)
  }


/// return butt while calling onclick with theh incrementCount being called
  return (
    <>

    <h2>Coiunter</h2>
    <button onClick={incrementCount}>
      i was clicked {count}
    </button>

    <h1>Toggle Light</h1>
    <div
    style={{
      height: "50px",
      width: "50px",
      background: light ? "yellow" : "grey"


    }}
    onClick={toggleLight}
    />
    </>
  );
}

export default App;
