import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ step }) => {
  const progress = (step / 6) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
