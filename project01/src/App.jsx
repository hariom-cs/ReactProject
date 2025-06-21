import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(13)
  // var counter=7;
  const addValue=()=>{
    // counter= counter+1;
    setCount(counter+1);
  }
  const subValue=()=>{
    setCount(counter-1);
  }
  return (
    <>
       
      <h1>Hariom Kumar</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>add Value</button>
      <button onClick={subValue}>sub Value</button>
    </>
  )
}

export default App
