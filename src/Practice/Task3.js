import {useState} from 'react'

function Task3() {
    const[inputValue,SetinputValue]=useState('');
    const[color,setcolor]= useState('red')
    const handlechange = (g)=> {
        SetinputValue(g.target.value);
    };

    function ChangeColor (){
        setcolor('green')
    }
  return (
    <div>
        <input placeholder='enter a Number' value={inputValue} onChange={handlechange}></input>
        <p style={{backgroundColor:color}}>you typed{inputValue}</p>
        <button onClick={handlechange}> Change Color</button>
      


      
    </div>
  )
  
}

export default Task3



