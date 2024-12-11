


import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <p className="spinner-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;