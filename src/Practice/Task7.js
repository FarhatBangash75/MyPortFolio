import React, { useState } from 'react'

function Task7() {
    const[inputvalue,Setinputvalue]=useState('');
    const[displayvalue,Setdisplayvalue]=useState([]);

    const handlechange=(e) =>{

        Setinputvalue(e.target.value)
    }
    const clickchange= ()=>{
        Setdisplayvalue([...displayvalue,inputvalue]);
       Setinputvalue('')
    }
  return (
    <div>
      <input placeholder='search' value={inputvalue} onChange={handlechange}></input>
      <button onClick={clickchange}> Cliak me</button>
      {displayvalue.map(function name(e)
      
      { return <ul>
      
      <li>{e}</li>


      </ul>}
      )}
      
    </div>
  )
}

export default Task7
