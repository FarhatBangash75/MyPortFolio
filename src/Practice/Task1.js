import {useState} from 'react'

function Task1() {
  const[SearchName,SetSearchName] =useState('')
const arry=[
{name:"farhat",age:17,GPA:2.3},
{name:"haroon",age:23,GPA:2.4},
{name:"jibran",age:45,GPA:3.5},
{name:"sanyaa",age:23,GPA:3.5},

]
function handlechange(e){
  const value=e.target.value;
  SetSearchName(value);

}
const filterarry=arry.filter(function name(j){
return j.name.includes(SearchName)
})

  return (
    <div>
      <input placeholder='search' value={SearchName} onChange={handlechange}></input>
      {filterarry.map(function name(grt){
     return <ul key={grt.age}>
     <li>{grt.name}</li>
     <li>{grt.age}</li>
     <li>{grt.GPA}</li>
   </ul>
  
    })}</div>
  )
}

export default Task1
