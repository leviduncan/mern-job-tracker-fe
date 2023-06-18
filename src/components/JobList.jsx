import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://mern-job-tracker-be.cyclic.app/jobs'); // Replace '/api/jobs' with your actual backend API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.jobTitle}</h3>
          <p>{job.companyName}</p>
          <p>{job.jobDescription}</p>
          <p>{job.jobPostingURL}</p>
          {/* Display other job details as needed */}
        </div>
      ))}
    </div>
  );
};

export default JobList;
