// JobDetailPage.js

import React from 'react';

const JobDetailPage = () => {
  // Example data for job detail
  const jobDetail = {
    title: 'Software Engineer',
    companyName: 'ABC Inc.',
    location: 'San Francisco, CA',
    description: 'We are seeking a talented software engineer to join our team...',
    // Add more details as needed
  };

  return (
    <div className="job-detail-container">
      <h2>{jobDetail.title}</h2>
      <h3>{jobDetail.companyName} - {jobDetail.location}</h3>
      <p>{jobDetail.description}</p>
      {/* Add more job details here */}
    </div>
  );
}

export default JobDetailPage;


