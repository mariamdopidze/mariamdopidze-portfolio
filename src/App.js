import React from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main"

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Routes>
        <Route path="/about/" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/skills/" element={<Skills />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
