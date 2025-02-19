import React, { useEffect, useState } from 'react'


function Task11() {
const[Password,setPassword]=useState('')
const[length,Setlength]=useState(8)
const[NumberAllowed,setNumberAllowed]=useState(false)
const[SpecialChars,setSpecialChars]=useState(false)
function Passwordgernate(){
  let varible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let Number='123456789'
  let pass=" "
  if(NumberAllowed){
    varible+=Number
  }
    if(SpecialChars){
        varible+=Number
    }
  for(let i=1;i<=length;i++){
  let RandomPassword=Math.floor(Math.random()*varible.length)
   pass+=varible[RandomPassword]
}
setPassword(pass) 
}
function RangeChance(e){
    Setlength(e.terget.value)

}
function numberchange(){
    setNumberAllowed(!NumberAllowed)
}
function variblechange(){
    setSpecialChars(!SpecialChars)
}
useEffect(()=>{
Passwordgernate()

},[length,NumberAllowed,SpecialChars])

  return (
    <div>
  <input value={Password} readOnly/>
    <label>Numbers
            <input type='checkbox' checked={NumberAllowed} onChange={numberchange}/>
        </label>
      <label>Varible
        <input type='checkbox' checked={SpecialChars} onChange={variblechange}/>
      </label>

        <input type='range'min={8} max={14} value={length} onChange={RangeChance}></input>


    </div>
  )
}

export default Task11
