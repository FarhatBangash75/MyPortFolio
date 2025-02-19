import React, { useState } from 'react'

function UserSearch() {
    const productData = [
        { id: 1, name: "iPhone 14", category: "Electronics", price: 999 },
        { id: 2, name: "Samsung TV", category: "Electronics", price: 499 },
        { id: 3, name: "Leather Jacket", category: "Clothing", price: 199 },
        { id: 4, name: "Sofa Set", category: "Furniture", price: 899 },
        { id: 5, name: "Dining Table", category: "Furniture", price: 699 },
        { id: 6, name: "T-Shirt", category: "Clothing", price: 49 },
      ];
      const [Searchquery,SetSearchquery]=useState('')

      function HandleChange(e){
        SetSearchquery(e.target.value)
      }
  
       
  const FilterProduct = productData.filter(function Product(prd){
        const SearchByName = prd.name.includes(Searchquery)
        return SearchByName
      })
  console.log(FilterProduct);
  
      
  return (
    <div>
      <h1>All Product</h1>
      <input placeholder='Search...'  value={Searchquery} onChange={HandleChange}/>
      <p>{Searchquery}</p>
      {FilterProduct.map(function Product(prd,index){
       return <div key={index} style={{width:"300px",marginBottom:'20px',padding:'10px',
        border:'1px solid black',borderRadius:'6px'}}>
            <h1>{prd.name}</h1>
            <p>{prd.category}</p>
            <p>{prd.price}</p>
        </div>
      })}
    </div>
  )
}

export default UserSearch
