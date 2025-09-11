import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress, maxProgress, width, height }) => {
  const percentage = Math.min((progress / maxProgress) * 100, 100);
  
  return (
    <div 
      className="progress-bar-container"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div 
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;