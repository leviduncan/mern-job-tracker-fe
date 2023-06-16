import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout'); // Replace '/api/auth/logout' with your actual backend API endpoint
      // Handle successful logout, e.g., clear user data, redirect to login page
    } catch (error) {
      console.error(error);
      // Handle logout error, e.g., display error message
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

