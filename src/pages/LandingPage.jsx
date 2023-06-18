import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Job Tracker</h1>
      <p>Track and manage your job applications with ease!</p>
      <h2>Features:</h2>
      <ul>
        <li>Track your job applications in one place</li>
        <li>Stay organized with application status updates</li>
        <li>Get reminders for upcoming interviews and deadlines</li>
        <li>Analyze your application progress and success rates</li>
        <li>Customize your user experience with settings</li>
      </ul>
      <div>
        <Link to="/register" className="btn btn-primary mr-3">Sign Up</Link>
        <Link to="/login" className="btn btn-secondary">Log In</Link>
      </div>
    </div>
  );
};

export default LandingPage;