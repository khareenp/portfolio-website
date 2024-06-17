import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Resume from './components/Resume';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
