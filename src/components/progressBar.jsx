import React from 'react';
import "../Home.css";

const ProgressBar = ({ progress, updateProgress }) => {
  return (
    <div class="wrap">
      <div class="progress-out mt-3"> 
        <div class="progress-in" style={{ width: `${progress}%` }}> </div>
      </div>
    </div>
  );
};

export default ProgressBar;
