import React from "react";
import {Routes,Route,} from "react-router-dom";
import Home from './Practice/Home';
import About from './Practice/About';
import Service from './Practice/Service';
import Blog from './Practice/Blog';
import Header2 from './Practice/Header2';

function App(){

  return (
   <>
   <Header2/>
   
   <Routes>
    <Route path="/" element ={<About/>}/>
    <Route path="/Home" element ={<Home/>}/>
    <Route path='/Service' element ={<Service/>}/>
    <Route path='/Blog'  element ={<Blog/>} />
   </Routes>

      </>
  )
}

export default App;
