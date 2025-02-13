
import React from 'react'
import Header from "./components/Header"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"
import Skills from "./components/pages/Skills"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-white text-gray-900" >


<Routes>
          <Route path="/about/" element={<About/>}/>
        
          <Route path="/project" element={<Projects/>}/>
          <Route path="/contact/" element={<Contact/>}/>
          <Route path="/skills/" element={<Skills/>}/>
         
        

        </Routes>

     
     
    </div>
  );
}

export default App;
