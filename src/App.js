// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import PassengerList from './components/PassengerList';
import './App.css';

const App = () => {
  const [passengers, setPassengers] = useState([]);
  const [totalFare, setTotalFare] = useState(0);

  const handleRegistration = (formData) => {
    const fare = formData.isBusinessClass ? 1000 : 500;
    setPassengers((prevPassengers) => [...prevPassengers, formData]);
    setTotalFare((prevFare) => prevFare + fare);
    alert('Registration done successfully!');
  };

  return (
    <Router>
      <div className="App">
        <h1>Airline Reservation System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Registration</Link>
            </li>
            <li>
              <Link to="/passenger-list">Passenger List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RegistrationForm onRegistration={handleRegistration} />} />
          <Route path="/passenger-list" element={<PassengerList passengers={passengers} totalFare={totalFare} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
