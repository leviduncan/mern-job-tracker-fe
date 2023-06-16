import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const JobSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('default');

  const handleSearch = () => {
    // Perform the search using the searchQuery and location
    // Set the fetched jobs to the jobs state
    // You can use an API or a backend endpoint to fetch the jobs
    // and update the jobs state accordingly
    // Example code:
    // fetchJobs(searchQuery, location)
    //   .then(data => setJobs(data))
    //   .catch(error => console.log(error));
  };

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sorting
  const handleSortChange = (value) => {
    setSortBy(value);
    // Implement the logic to sort the jobs array based on the selected sorting option
    // You can modify this function based on your specific sorting requirements
    // Example code:
    // let sortedJobs = [...jobs];
    // if (value === 'title') {
    //   sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
    // } else if (value === 'company') {
    //   sortedJobs.sort((a, b) => a.company.localeCompare(b.company));
    // }
    // setJobs(sortedJobs);
  };

  return (
    <div>
      <h1>Job Search</h1>
      <div className="d-flex">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter job title or keywords"
          className="form-control mr-2"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="form-control mr-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="mt-4">
        {/* Sort Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary">
            Sort By: {sortBy}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortChange('default')}>
              Default
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('title')}>
              Title
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('company')}>
              Company
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mt-4">
        {/* Render the list of jobs */}
        {currentJobs.map((job) => (
          <div key={job.id} className="card mb-3">
            <div className="card-body">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              {/* Display other job details */}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {/* Pagination */}
        <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>

          <button
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map(
          (item, index) => (
            <li
              key={index}
              className={`page - item ${currentPage === index + 1 ? 'active' : ''}`}
>
        <button
          className="page-link"
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
      </li>
      )
)}
      <li
        className={`page - item ${ currentPage === Math.ceil(jobs.length / jobsPerPage) ? 'disabled' : ''}`}
>
      <button
        className="page-link"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
      >
        Next
      </button>
    </li>
</ul >
</div >
</div >
);
};

export default JobSearchPage;
