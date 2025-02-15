import React from 'react';

const Step1 = ({ nextStep, handleChange, formData }) => {
  const propertyPurposeOptions = ['Buy for Use', 'Investing'];
  const propertyOptions = ['Apartment', 'Commercial Space', 'Multi-family House'];
  const investmentOptions = ['Long-term Rental', 'Short-term Rental', 'Mixed-use Development'];

  return (
    <div className="form-card">
      <h2>Let's set up your profile!</h2>
      <p>What is your purpose for buying a property?</p>
      <div className="option-buttons">
        {propertyPurposeOptions.map((purpose) => (
          <button
            key={purpose}
            onClick={() => handleChange('propertyPurpose', purpose)}
            className={`option-button ${formData.propertyPurpose === purpose ? 'selected' : ''}`}
          >
            {purpose}
          </button>
        ))}
      </div>

      <p>What type of property are you looking for?</p>
      <div className="option-buttons">
        {propertyOptions.map((type) => (
          <button
            key={type}
            onClick={() => handleChange('propertyType', type)}
            className={`option-button ${formData.propertyType === type ? 'selected' : ''}`}
          >
            {type}
          </button>
        ))}
      </div>

      <p>What is your investment strategy?</p>
      <div className="option-buttons">
        {investmentOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleChange('investmentStrategy', option)}
            className={`option-button ${formData.investmentStrategy === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={nextStep}
        className="nav-button"
        disabled={!formData.propertyPurpose || !formData.propertyType || !formData.investmentStrategy}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
