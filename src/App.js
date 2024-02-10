// src/App.js
import React from 'react';
import './App.css';
import Autocomplete from './Autocomplete';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // Assuming you have this component
import HenryImage from './Henry.png';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gluten-Free Explorer</h1>
        <p>Find and explore gluten-free products easily!</p>
        <img src={HenryImage} alt="Henry" className="hover-bear" title="Henry" />
        <Routes>
          <Route path="/" element={<Autocomplete />} exact />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
