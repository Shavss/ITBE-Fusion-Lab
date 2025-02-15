import React from 'react';

const Step6 = ({ prevStep, handleSubmit, handleChange, formData }) => {
  const accessibilityOptions = ['Near Public Transport', 'Wheelchair Accessible', 'Pedestrian-friendly'];

  return (
    <div className="form-card">
      <h2>Accessibility and Additional Details</h2>
      <p>Accessibility requirements:</p>
      <div className="option-buttons">
        {accessibilityOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleChange('accessibility', option)}
            className={`option-button ${formData.accessibility === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
      <p>Any additional preferences?</p>
      <textarea
        placeholder="Add your preferences here..."
        value={formData.additionalDetails}
        onChange={(e) => handleChange('additionalDetails', e.target.value)}
        className="input-field"
      />
      <div className="nav-buttons">
        <button onClick={prevStep} className="nav-button">Back</button>
        <button
          onClick={handleSubmit}
          className="nav-button"
          disabled={!formData.accessibility}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step6;
