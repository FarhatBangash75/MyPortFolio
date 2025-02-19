import React, { useState } from 'react'
import './Input.css'
import eye from '../Images/OIP.jpeg'
import closeye from '../Images/closed-eye-icon-4.jpg'
function Input() {
    const [showPassword,setshowPassword]= useState(false)
 
    function togglepassword(){
        setshowPassword(!showPassword)
       
      
        
    }
  return (
    <div className='div'>
<div className='input-div'>
  <input placeholder='enter Password' className='inputs' type={showPassword?'text':'password'}/>
 <img src={showPassword?closeye:eye} className='eye' onClick={togglepassword} />
  </div>
    </div>
  )
}

export default Input
