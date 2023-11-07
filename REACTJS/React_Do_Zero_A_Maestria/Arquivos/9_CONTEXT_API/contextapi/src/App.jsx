import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <h1>Context API</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App