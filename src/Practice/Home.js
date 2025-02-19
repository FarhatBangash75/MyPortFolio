import React from 'react'
import './Home.css'
import Pic from'./Pic.jpg';



function Home() {
  return (
    <div  className='home-div'>


    <div className='home-intro-div'>
    <img src={Pic} alt='pic' className='Pic'/>
    
    
<div className='Text-div'>
  <label className='text'>CODE WITH FARHAD</label>
  <label className='web-text'>I'm a Web</label>
  <label className='devl'>Developer</label>
  <p className='p-text'>As a Seasoned software Engneer and Web Developer,I design, Developer and deploy innovative software Solutions and web application That drive business growth with expertise in both software engineering and web Development I Craft Scable,efficient and secure efficient,and secure software system and web Application Using Cutting-edge Technology</p>
  <button className='Btn-1'>
    Download Cv
  </button>

</div>


</div>



</div>
  )
}

export default Home
