import React from 'react';

const Step4 = ({ nextStep, prevStep, handleChange, formData }) => {
  const areaOptions = ['North Zone', 'Central Zone', 'East Zone', 'West Zone'];

  return (
    <div className="form-card">
      <h2>Area Preferences</h2>
      <p>Preferred area within Paket Post Areal:</p>
      <div className="option-buttons">
        {areaOptions.map((area) => (
          <button
            key={area}
            onClick={() => handleChange('areaPreference', area)}
            className={`option-button ${formData.areaPreference === area ? 'selected' : ''}`}
          >
            {area}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={prevStep} className="nav-button">Back</button>
        <button
          onClick={nextStep}
          className="nav-button"
          disabled={!formData.areaPreference}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
