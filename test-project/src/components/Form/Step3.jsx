import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  const viewOptions = ['City View', 'Park View', 'Skyline View', 'No Preference'];
  const parkingOptions = ['Yes, parking needed', 'No parking needed'];

  return (
    <div className="form-card">
      <h2>Property Preferences</h2>
      
      <p>What is your preferred unit size?</p>
      <input
        type="range"
        min="50"
        max="250"
        step="10"
        value={formData.unitSize || 50}
        onChange={(e) => handleChange('unitSize', e.target.value)}
        className="slider-input"
      />
      <p>Selected Unit Size: {formData.unitSize ? formData.unitSize : 50} m²</p>

      <p>Preferred view for your property:</p>
      <div className="option-buttons">
        {viewOptions.map((view) => (
          <button
            key={view}
            onClick={() => handleChange('viewPreference', view)}
            className={`option-button ${formData.viewPreference === view ? 'selected' : ''}`}
          >
            {view}
          </button>
        ))}
      </div>

      <p>Do you require parking facilities?</p>
      <div className="option-buttons">
        {parkingOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleChange('parkingNeeded', option)}
            className={`option-button ${formData.parkingNeeded === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={prevStep} className="nav-button">Back</button>
        <button 
          onClick={nextStep} 
          className="nav-button" 
          disabled={!formData.unitSize || !formData.viewPreference || !formData.parkingNeeded}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
