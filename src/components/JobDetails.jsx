import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${jobId}`); // Replace `/api/jobs/${jobId}` with your actual backend API endpoint
        setJob(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJob();
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      {/* Display other job details as needed */}
    </div>
  );
};

export default JobDetails;
