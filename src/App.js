import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ number, setNumber ] = useState(0)
  const [ color, setColor] = useState('red')

  function increment(){
    setNumber(number + 1)
  }
  function decrement(){
    setNumber(number - 1)
  }

  useEffect(()=>{
    if(color === 'red'){
      setColor('blue')
    }else{
      setColor('red')
    }
  }, [number])

  return (
    <div className="App">
      <p style={{color: color}} >{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
