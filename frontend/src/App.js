// App.js
import './index.css'; // Import the stylesheet
import React from 'react';
import HomePage from './pages/homepage';
import EmployerDashboard from './pages/employerdashboard';
import CandidateDashboard from './pages/candidatedashboard';
import JobDetail from './pages/jobdetailpage';
import JobListingsPage from './pages/joblistingpage';

function App() {
  return (
    <div>
      <HomePage />
      <EmployerDashboard />
      <CandidateDashboard />
      <JobDetail/>
      <JobListingsPage/>
    </div>
  );
}

export default App;
