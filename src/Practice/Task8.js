import React, { useState } from 'react'

function Task8() {
    const[inputvalue,SetinputValue]=useState('');
    const array=[
    {name:'Farhat', fathername:'M.irshad',age:20,Department:"software-Eng"},
    {name:'Dr.haroon',fathername:'rasheed',age:40,Department:"mathmatics"},
    {name:'halima',fathername:'ramazan',age:23,Department:'English'},
    {name:'Asia',fathername:'nabi',age:16,Department:'chemistry'},
    ]
    const handlechange=(e)=>{
     const value=e.target.value;
     SetinputValue(value);
    }

   const filterarray=array.filter(function name(e){
    return e.name.includes(inputvalue)
   })
   const clickchange=()=>{
    SetinputValue(inputvalue);
   }

  return (
    <div>
        <input placeholder='Search' value={inputvalue} onChange={handlechange}></input>
        <button onClick={clickchange}>Click Me</button>
        {filterarray.map(function name(e){
            return <ul key={e.age}>
           <li>{e.name}</li>
           <li>{e.age}</li>
           <li>{e.Department}</li>
           <li>{e.fathername}</li>




            </ul>
        })
        }
    </div>
  )
}

export default Task8
