import React, { useEffect, useState } from 'react'

function Equation() {
  const [Equations,SetEquation]=useState([])
   async function Structure() {
    await fetch('https://dummyjson.com/products?limit=10')
    .then ((data)=>data.json())
    .then((data)=> SetEquation(data.products)
    
  )
    .catch((err)=>console.log(console.error('error fatching'))
    )
    
  }

  
  useEffect(()=>{
    Structure()
  },[])
  
  return (
    <div>
     <h1>Equation</h1>
     <p>In Equation is statement that express the equality of two mathmatical express often containing variable constant </p>
     <p>constant and varoius mathmatical operation equation are used to describe realationship between variable</p>
     <h1>key concept of an Equation</h1>
     <ol>
      <li>Varible </li>
      <li>Constant</li>
      <li>Mathmatical operation</li>
      <li>Equality operation</li>
     </ol>
     <h1>Products</h1>
     {Equations.map((prd)=>{
      return <div key={prd.id}>
        <p>Name:{prd.brand}</p>
        
      </div>
     })}
    </div>
  )
}

  

export default Equation
