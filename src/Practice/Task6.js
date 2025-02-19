import React from 'react'
import { useState } from 'react';
function Task6() {
    const[names,Setname]= useState('')
    const array =[
    {name:"farhad",GPA:3.3,program:("Softaware-Eng")},
    {name:"ASMAT",GPA:3.8,program:("Statastic")},
    {name:"Haroon",GPA:3.2,program:('Mathmatices')}

    ]
    function handlechange(e){
    const value=e.target.value;
    Setname(value);
    }
  const filterarray=array.filter(function name(f){
     return f.name.includes(names)
})


  return (
    <div>
        <input placeholder="name" value={names} onChange={handlechange} ></input>
         {filterarray.map(function name(g){
        return <ul key={g.age}>
            <li>{g.name}</li>
            <li>{g.GPA}</li>
            <li>{g.program}</li>
        </ul>
})}
    </div>
        
  )
}

export default Task6
