import React, { useEffect, useState } from 'react'

function Task10() {
    const [Password,SetPassword]=useState('')
   const [length,setlength] = useState(8)
function Passwordgernate(){
let varible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let Number='123456789'
let pass=''
for(let i=1;i<=length;i++){
    let RandomPassword= Math.floor(Math.random()*varible.length)
    pass+=varible[RandomPassword]
}
 SetPassword(pass)
}
function RangeChance(e){
    setlength(e.target.value)
}
useEffect(()=>{
Passwordgernate()
},[length])
  return (
    <div>
        <input value={Password} readOnly/>
        <label>Numbers
            <input type='checkbox'/>
        </label>
      <label>Varible
        <input type='checkbox'/>
      </label>

<input type='range' min={8} max={14} value={length} onChange={RangeChance}></input>
    </div>
  )}


export default Task10
