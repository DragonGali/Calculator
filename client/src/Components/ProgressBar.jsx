import React from 'react';
import '../Styles/ProgressBar.css';

const ProgressBar = ({ progress, maxProgress}) => {
  return (
    <div 
      className="progress-bar-container"
    >
      <div 
        className="progress-bar-fill"
      />
    </div>
  );
};

export default ProgressBar;