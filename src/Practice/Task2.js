import React from 'react'

function Task2() {
  
    const student=[
  {name:"ahsan",age:23,GPA:2.2,address:"Hayatabd"},
  {name:"irshad",age:32,GPA:2.3,address:"Hungu",},
  {name:"sanyaa",age:23,GPA:3.3,address:"Thall"},
  
    ]
    

  return (
    <div>
     
      {student.map(function name(f){
      return <ul>
      <li> {f.name}</li>
      <li>{f.age}</li>
      <li>{f.GPA}</li>
      <li>{f.address}</li>

      

      </ul>
      })}
    </div>
  

  


  )
  
}







export default Task2
