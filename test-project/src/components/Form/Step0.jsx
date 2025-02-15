import React from 'react';

const Step0 = ({ nextStep }) => {
  return (
    <div className="form-card step0-card">
      <h2>Welcome</h2>
      <p>Let’s plan your investment together!</p>
      <ul style={{ textAlign: 'left', margin: '1rem 0' }}>
        <li>First we check what you are looking for</li>
        <li>Tell us your ideas, preferences, etc.</li>
        <li>Get estimated costs and returns for your investment</li>
        <li>Access specialists, planners, and traders you need for this</li>
      </ul>
      <button onClick={nextStep} className="nav-button">
        Let’s go
      </button>
    </div>
  );
};

export default Step0;
