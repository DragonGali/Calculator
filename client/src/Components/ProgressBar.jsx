/**
 * ProgressBar.jsx
 * 
 * A simple horizontal progress bar.
 * 
 * - Props:
 *   - `progress`: current progress value
 *   - `maxProgress`: maximum progress value
 * 
 * - Features:
 *   - Fills proportionally to progress
 */


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