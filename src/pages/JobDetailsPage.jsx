import React from 'react';

const JobDetailsPage = (props) => {
  const { job } = props.location.state;

  return (
    <div>
      <h1>Job Details</h1>
      <div>
        <h2>{job.title}</h2>
        <p>{job.company}</p>
        <p>{job.location}</p>
        {/* Display other job details */}
      </div>
    </div>
  );
};

export default JobDetailsPage;
