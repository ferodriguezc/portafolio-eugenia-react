import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skill from './components/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';



function App() {
  return (
    <div className='bg-custom bro'>
      <div className="content-container">
      <Navbar/>
      <About/>
      <Skill/>
      <Projects />
      <Footer />
      </div>

    </div>
  



  );
}

export default App;
