import React, { useState } from 'react'
import './Blog.css'

function Blog() {
  const [blog,setblog]=useState(false)

  function showblog(){
    setblog(!blog)
  }
  return (
    <div style={{marginTop:'100px', width:'370px', height:'60px',  marginLeft:'450px', backgroundColor:'white',marginTop:'130px'}}>
    
      <p style={{marginTop:'0px', marginBottom:'0px',fontSize:'17px', color:'cry'}}>MY Skillest C++,Opps,Html,CSS,Javascript,React</p>
      <p style={{marginBottom:'0px',marginTop:'0px'}}>Mysql,Nodejaz</p>
      
    </div>  
    
  )
}

export default Blog
