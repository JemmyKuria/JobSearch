// CandidateDashboard.js

import React from 'react';

const CandidateDashboard = () => {
  // Example data for job applications
  const jobApplications = [
    { id: 1, jobTitle: 'Software Engineer', companyName: 'ABC Inc.', status: 'Pending' },
    { id: 2, jobTitle: 'Data Analyst', companyName: 'XYZ Corp.', status: 'Rejected' },
    // Add more job applications as needed
  ];

  return (
    <div className="candidate-dashboard-container">
      <h2>Candidate Dashboard</h2>
      <h3>My Job Applications</h3>
      <ul className="candidate-dashboard-job-applications">
        {jobApplications.map(application => (
          <li key={application.id}>
            <strong>{application.jobTitle}</strong> at {application.companyName} - Status: {application.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateDashboard;
