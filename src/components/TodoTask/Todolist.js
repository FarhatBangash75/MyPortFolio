import React, { useState } from 'react'

function Todolist() {
  const [list,setlist] = useState([
    {
    tasks:'homework',complete:false
  }
])

const [task,settask] = useState('')

function AddTask (){

  const newobj ={
    tasks:task,
    complete:false
  }
 let NewList = [...list,newobj]

 setlist(NewList)
}

function handleChange (e){
  settask(e.target.value)
}


function handlecomplete (Index){
 let newList = list.map(function lst(lsts,index){
   return  index===Index?{...lsts,complete:!lsts.complete}:lsts
  })
  setlist(newList)
}



  return (
    <div >
     
      <input placeholder='Enter new Task' value={task} onChange={handleChange}/>
      <button onClick={AddTask}>Add Task</button>
      {
        list.map(function List(lst,index){
         return <div className='todoTask' key={index} style={{display:'flex',alignItems:'center',gap:'20px'}}>
          <input type='checkbox' checked={lst.complete} onChange={()=>handlecomplete(index)}/>
          <p style={{textDecoration:lst.complete?'line-through':'none'}}>{lst.tasks}</p>
          <button >delete</button>
         </div> 
        })
      }
    </div>
  )
}

export default Todolist
