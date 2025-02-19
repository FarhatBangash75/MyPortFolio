import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate();

    function HandleNavigation (nav){
        navigate(nav)
    }
  return (
    <div className='Header'>
      <ul>
        <li onClick={()=>HandleNavigation('/')}>Home</li>
        <li onClick={()=>HandleNavigation('/about')} >About US</li>
        <li onClick={()=>HandleNavigation('/contact')}>contat Us</li>
        <li onClick={()=>HandleNavigation('/product')}>Product</li>
      </ul>
    </div>
  )
}

export default Header
