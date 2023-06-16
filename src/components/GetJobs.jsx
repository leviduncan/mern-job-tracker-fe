import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetJobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/jobs'); // Replace '/api/jobs' with your actual backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item._id}>{item.title}</p>
      ))}
    </div>
  );
};

export default GetJobs;
