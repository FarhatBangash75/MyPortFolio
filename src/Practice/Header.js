import React from 'react'
import "./Header.css"
import { useNavigate }from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    function HandleNavigation(nav){

        navigate(nav)
    }


  return (
    <div className='Header'>
    <ul>
    
    <li onClick={()=>HandleNavigation('/')}>Calculus</li>
    <li onClick={()=>HandleNavigation('/Equation')}>Equations</li>
    <li onClick={()=>HandleNavigation('/Oriented')}>Oriented</li>
    <li onClick={()=>HandleNavigation('/Linearalgebra')}>Linearalgebra</li>
    <li onClick={()=>HandleNavigation('/product')}>Product</li>



    </ul>

      
    </div>
  )
}

export default Header
