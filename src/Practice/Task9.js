import React, { useState } from 'react'

function Task9() {
    const[Calculate,SetCalculate]=useState(0)
   function increment(){
    SetCalculate(Calculate+1);
   }
  function decrement(){
    SetCalculate(Calculate-1)
  }


  return (
    <div>
        <p>{Calculate}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    
    </div>
  )
}

export default Task9
