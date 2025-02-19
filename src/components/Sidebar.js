import React from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router'
function Sidebar({setshowsidebar}) {
    const navigate = useNavigate()
    
   function HandleNavigation(nav){
    navigate(nav)
    setshowsidebar(false)

  }
  return (
    <div className='sidebar'>
      <ul>
      <li onClick={()=>HandleNavigation('/')}>About</li>
        <li onClick={()=>HandleNavigation('Home')}>Home</li>
        <li onClick={()=>HandleNavigation('Service')}>Service</li>
        <li onClick={()=>HandleNavigation('Blog')}>Blog</li>
        
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar
