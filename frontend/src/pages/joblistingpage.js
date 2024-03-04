import React from 'react';

const JobListingsPage = () => {
  // Example data for job listings
  const jobListings = [
    { id: 1, title: 'Software Engineer', companyName: 'ABC Inc.', location: 'San Francisco, CA', datePosted: '2024-02-26' },
    { id: 2, title: 'Data Analyst', companyName: 'XYZ Corp.', location: 'New York, NY', datePosted: '2024-02-25' },
    // Add more job listings as needed
  ];

  return (
    <div className="job-listings-container">
      <h2>Job Listings</h2>
      <div className="job-listings-grid">
        {jobListings.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>Company: {job.companyName}</p>
              <p>Location: {job.location}</p>
              <p>Date Posted: {job.datePosted}</p>
              {/* Anchor link to navigate to job detail page */}
              <a href={`/job/${job.id}`}>View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListingsPage;
