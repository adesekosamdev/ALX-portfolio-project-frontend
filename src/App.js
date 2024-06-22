// import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import React, {useState, useEffect} from 'react';
import Dashboard from './pages/Dashboard';
import Home from './pages/Homepage';
import Register from './pages/Register';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(authToken ? true : false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally validate the token here
      setAuthToken(token);
      setIsAuthenticated(true);
    }
  }, []);
  // console.log(authToken);
  // console.log(isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
