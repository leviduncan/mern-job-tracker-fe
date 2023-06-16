import React from 'react';
import JobList from './JobList';
import ApplicationList from './ApplicationList';
import UserProfile from './UserProfile';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h3>Job List</h3>
          <JobList />
        </div>
        <div className="dashboard-item">
          <h3>Application List</h3>
          <ApplicationList />
        </div>
        <div className="dashboard-item">
          <h3>User Profile</h3>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
