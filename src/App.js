import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import JobSearchPage from './pages/JobSearchPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <h1>My Job Tracking App</h1>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/jobsearchpage" element={<JobSearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

