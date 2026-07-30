// import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'; // Added to track your login state
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard'; // Import your new Dashboard component

const App = () => {
  // Core state to hold logged-in user information
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      <Router>
        <Navbar user={currentUser} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Register" element={<Register />} />
          
          {/* If already logged in, redirect away from login page straight to dashboard */}
          <Route 
            path="/Login" 
            element={currentUser ? <Navigate to="/Dashboard" /> : <Login onLoginSuccess={setCurrentUser} />} 
          />

          {/* Secure Protected Dashboard Route */}
          <Route 
            path="/Dashboard" 
            element={currentUser ? <Dashboard user={currentUser} onLogout={handleLogout} /> : <Navigate to="/Login" />} 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
