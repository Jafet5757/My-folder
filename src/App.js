import React, {useState} from "react";
import NavBar from './components/NavBar'
import Start from './components/Start'

function App() {

  const [getDarkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <NavBar darkmode = {getDarkMode}/>

      <Start darkmode = {getDarkMode} />
    </div>
  );
}

export default App;
