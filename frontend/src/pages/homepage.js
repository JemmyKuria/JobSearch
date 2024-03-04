// HomePage.js

import React from 'react';

const HomePage = () => {
  // Example data for featured job listings
  const featuredJobs = [
    { id: 1, title: 'Software Engineer', companyName: 'ABC Inc.', location: 'San Francisco, CA' },
    { id: 2, title: 'Data Analyst', companyName: 'XYZ Corp.', location: 'New York, NY' },
    // Add more featured jobs as needed
  ];

  return (
    <div className="homepage-container">
      <div className="welcome-message">
        <h1>Welcome to Our Job Board!</h1>
        <p>Find your dream job today.</p>
      </div>

      <div className="featured-jobs">
        <h2>Featured Job Listings</h2>
        <ul>
          {featuredJobs.map(job => (
            <li key={job.id}>
              <strong>{job.title}</strong> at {job.companyName} - {job.location}
            </li>
          ))}
        </ul>
      </div>

      <div className="search-bar">
        <h2>Search Jobs</h2>
        <input type="text" placeholder="Enter keywords..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default HomePage;
