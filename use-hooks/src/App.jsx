import './App.css'

import { useState } from 'react';

function App() {
  //let counter =15
 let [counter ,setcounter]=useState(15)
const addvalue=()=>{
  // counter++;
  setcounter(counter=counter +1)
  console.log(counter)
  }

  const removevalue= ()=>{
    // counter--
    setcounter(counter=counter-1)
    console.log(counter)
  }
  return (
    <>
     <h1>counter:{counter}</h1>

     <button onClick={addvalue}>add Value</button>
     <button onClick={removevalue}>decrease Value</button>
    </>
  )
}

export default App
