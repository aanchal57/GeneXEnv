import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Genes from './pages/home/Genes';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/genes" element={<Genes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
