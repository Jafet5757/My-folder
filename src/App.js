import React from "react";
import NavBar from './components/NavBar'
import Start from './components/Start'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Banner from './components/Banner'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar/>

      <Start/>

      <AboutMe/>

      <Skills/>

      <Education/> 

      <Projects/> 

      <Banner/>

      <Contact/>
    </div>
  );
}

export default App;
