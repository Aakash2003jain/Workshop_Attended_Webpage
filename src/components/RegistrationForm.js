// src/components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onRegistration }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    source: 'Select Source', // Default value for dropdown
    destination: 'Select Destination', // Default value for dropdown
    isBusinessClass: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.firstName && formData.lastName && formData.source !== 'Select Source' && formData.destination !== 'Select Destination') {
      onRegistration(formData);
    } else {
      alert('Please fill in all required fields and select source/destination.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Source:
        <select name="source" value={formData.source} onChange={handleChange}>
          <option value="Select Source" disabled>Select Source</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <br />
      <label>
        Destination:
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="Select Destination" disabled>Select Destination</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isBusinessClass"
          checked={formData.isBusinessClass}
          onChange={handleChange}
        />
        Business Class
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
