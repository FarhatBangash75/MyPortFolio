import React, { useState } from 'react'

function Task5() {
    const[Inputvalue,SetinputValue]=useState('')
    const[displayname,Setdisplayname]=useState('')
     const handlechange =(e) =>{
        SetinputValue(e.target.value);

    }
    const handlescreen=() =>{
        Setdisplayname(Inputvalue);
    }
  return (
    <div>
      <input placeholder='Enter a value' value={Inputvalue} onChange={handlechange}></input>
      <button onClick={handlescreen}>click Me</button>
      <p>{displayname}</p>
      
    </div>
  )
}

export default Task5
