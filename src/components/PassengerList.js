// src/components/PassengerList.js
import React from 'react';

const PassengerList = ({ passengers, totalFare }) => {
  return (
    <div>
      <h2>Passenger Information</h2>
      <ul>
        {passengers.map((passenger, index) => (
          <li key={index}>
            Passenger {index + 1}: {passenger.firstName} {passenger.lastName} ({passenger.source} to {passenger.destination}) {passenger.isBusinessClass ? 'Business Class' : 'Economy Class'}
          </li>
        ))}
      </ul>
      <p>Total Fare: ${totalFare}</p>
    </div>
  );
};

export default PassengerList;
