import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/applications/${jobId}`, formData); // Replace `/api/applications/${jobId}` with your actual backend API endpoint
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        resume: '',
        coverLetter: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume:
          <input
            type="file"
            name="resume"
            onChange={(e) =>
              setFormData({ ...formData, resume: e.target.files[0] })
            }
          />
        </label>
        <label>
          Cover Letter:
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
