import React, {useState} from "react";
import NavBar from './components/NavBar'
import Start from './components/Start'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {

  return (
    <div className="App">
      <NavBar/>

      <Start/>

      <AboutMe/>

      <Skills/>

      <Education/> 
    </div>
  );
}

export default App;
