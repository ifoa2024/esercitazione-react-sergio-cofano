// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChiSiamo from './ChiSiamo';
import Registrazione from './Registrazione';
import HomePage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; 
const App = () => {
  return (
    <Router>
      
      <Navbar /> {/* Aggiungi la navbar sopra il contenuto */}
      
      <div className="container mt-4"> {/* Aggiungi un po' di margine al contenuto */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/registrazione" element={<Registrazione />} />
        </Routes>
      </div>
    
    </Router>
  );
};

export default App;
