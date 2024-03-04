// EmployerDashboardButton.js
import React from 'react';

const EmployerDashboardButton = () => {
  const handleClick = () => {
    window.location.href = '/employer-dashboard'; // Navigate to the employer's dashboard
  };

  return (
    <button onClick={handleClick}>Go to Employer Dashboard</button>
  );
}

export default EmployerDashboardButton;
