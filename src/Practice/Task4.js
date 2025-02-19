
import { useState } from 'react'
function Task4() {
    const [color,setColor] = useState('black');
    const[counter,setcounter]=useState(0);

  const changecolor =() => {
  if(color==='black'){
    setColor('red')

  }
  
  else{
   setColor('black')

  }


  };
  function increment(){
setcounter(counter+1);

  }
  function decrement(){
    if(counter>0){
      setcounter(counter-1);
    }
    
  }
  function Reset(){
    setcounter(0)
  }
  return (
    <div>


    <h1 style={{color:color}}>Text1</h1>
      
      <button onClick={changecolor}>click Me </button>
      <p>{counter}</p>
      <button onClick={increment}>NextButton</button>
      <button onClick={decrement}>Previoud Button</button>
      <button onClick={Reset}>Reset</button>
      
  

    </div>
  )

}
export default Task4
