import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './components/experience';
import Hero from './components/Hero';
import Education from './components/education';

function App() {
  return (
    <div>
      <Hero />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
