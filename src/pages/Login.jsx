// src/pages/Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Controlla le credenziali (esempio statico)
    if (username === "admin" && password === "password123") {
      onLogin(); // Passa il controllo al componente genitore (App) per segnare come loggato
      setErrorMessage(""); // Resetta l'errore
    } else {
      setErrorMessage("Credenziali non valide!"); // Mostra un messaggio di errore
    }
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Accedi</button>
      </form>
    </div>
  );
};

export default Login;
