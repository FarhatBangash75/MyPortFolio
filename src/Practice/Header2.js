import { useNavigate } from "react-router"
import './Header2.css'
import menu from  '../components/Assets/bar.jpeg'
import Sidebar from "../components/Sidebar";
import { useState } from "react";
function Header2() {
  const [showsidebar,setshowsidebar] = useState(false)
    
   const navigate=useNavigate();

   function HandleNavigation(nav){
     navigate(nav)

   }
   

   function handleshowSidebar(){
    setshowsidebar(!showsidebar)
   }

  return (
    <>
    <div className="Header2">

    <p>I'm Farhad</p>
    
    <ul>
        <li onClick={()=>HandleNavigation('/')}>About</li>
        <li onClick={()=>HandleNavigation('Home')}>Home</li>
        <li onClick={()=>HandleNavigation('Service')}>Service</li>
        <li onClick={()=>HandleNavigation('Blog')}>Skills</li>
        
    </ul>
    <div className="btn-div">
    <button className="btn">
        contact
    </button>
    <img src={menu} className="bar-icon" alt="icon" onClick={handleshowSidebar}/>
</div>
    </div>
   {showsidebar && <Sidebar setshowsidebar={setshowsidebar}/>}
    </>
  )
}

export default Header2
