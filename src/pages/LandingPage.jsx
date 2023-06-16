import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Job Tracker</h1>
      <p>Track and manage your job applications with ease.</p>
      <div>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default LandingPage;
