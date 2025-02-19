import React, { useEffect, useState } from 'react'

function Passwordgernate() {
    const [Password,setPassword] = useState('')
    const [length,setlength]= useState(8)
    const [NumberAllowed,setNumberAllowed] = useState(false)
    const [SpecialChars,setSpecialChars] = useState(false)
    
    
    function GeneraPassword(){
        let Chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let Number = '123456789'
        let Special = '@#$%^&*(){{!@@#'
        let Pass = ''
        if(NumberAllowed){
          Chars+=Number
        }
        if (SpecialChars){
          Chars+=Special
        }

        for(let i =1;i<=length;i++){

            let RandomPassword = Math.floor(Math.random()*Chars.length)
            Pass+=Chars[RandomPassword]
        }
        setPassword(Pass)
    }

    function RangeChane(e){
      setlength(e.target.value)
  }

   function HanldeChange (){
    setNumberAllowed(!NumberAllowed)
   }

   function ChasrChange (){
    setSpecialChars(!SpecialChars)
   }
    useEffect(()=>{
        GeneraPassword();
    },[length,NumberAllowed,SpecialChars])

  
  return (
    <div>
      <input  value={Password} readOnly/>
      <label>Numbers
        <input type='checkbox' checked={NumberAllowed} onChange={HanldeChange}/>
      </label>
      <label>SpeicalChars
        <input type='checkbox' checked={SpecialChars} onChange={ChasrChange}/>
      </label>
        <input type='range' min={8} max={14} value={length} onChange={RangeChane}/>
    </div>
  )
}

export default Passwordgernate
