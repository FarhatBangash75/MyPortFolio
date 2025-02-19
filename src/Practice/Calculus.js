import React, { useState,useEffect } from 'react'

function Calculus() {
const [product,setProduct] = useState([])

 async function getProduct (){
  await fetch('https://dummyjson.com/products?limit=10')
  .then((data)=>data.json())
  .then((data)=>setProduct(data.products))
  .catch((err)=>console.log('Error fetcing data')
  )

  }

  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
     <h1>Calculus</h1>
     <p>Calculus is the Branch Of Mathmatics Deal with study of function Continous Change, particular the context of Function and limits </p>
     <p>its denoted by dy/dx</p>
     <h1>Key Concept in calculus</h1>
     <ol>
      <li>Limits</li>
      <li>Derivative</li>
      <li>Integral</li>
      <li>Multivarible calculus</li>
     </ol>
     <h1>Products</h1>
     {product.map((prd)=>{
      return <div key={prd.data}>
        <p>Name:{prd.products}</p>
        
      </div>
     })}
    </div>
  )
}

export default Calculus
