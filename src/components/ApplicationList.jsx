import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/applications'); // Replace '/api/applications' with your actual backend API endpoint
        setApplications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Application List</h2>
      {applications.map((application) => (
        <div key={application._id}>
          <h3>{application.jobTitle}</h3>
          <p>{application.company}</p>
          <p>{application.status}</p>
          {/* Display other application details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;
