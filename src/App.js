import React from 'react';
import About from './Components/About';
import Agent from './Components/Agent';
import Contact from './Components/Contact';
import Header from './Components/Header';
import HowitWork from './Components/HowitWork';
import Property from './Components/Property';


function App() {
  return (
    <div className="App">
     <Header />
     <HowitWork />
     <About />
     <Agent />
     <Property />
     <Contact />
    </div>
  );
}

export default App;
