import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Landing from './Landing';
function App() {
  const handleLogin = () => {
    // Your login logic here
    console.log('Logged in!');
  };

  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home onLogin={handleLogin} />}
          >
            <Route index element={<Landing onLogin={handleLogin} />} />

            <Route path='login' element={<Login />} />
             <Route path="register" element={<Register />} />
           
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;