// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Segna come loggato
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Segna come non loggato
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/chi-siamo"
            element={isLoggedIn ? <ChiSiamo /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
