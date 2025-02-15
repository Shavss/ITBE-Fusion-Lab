import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  const amenityOptions = ['Gym', 'Pool', 'Parking', 'Garden', 'Smart Home Integration'];

  return (
    <div className="form-card">
      <h2>Investment Details</h2>
      <p>Select your approximate budget for investment:</p>
      <input
        type="range"
        min="500000"
        max="3000000"
        step="50000"
        value={formData.budgetSlider || 500000}
        onChange={(e) => handleChange('budgetSlider', Number(e.target.value))}
        className="slider-input"
      />
      <p>Selected Budget: €{formData.budgetSlider ? formData.budgetSlider.toLocaleString() : '500,000'}</p>

      <p>Select the amenities important for your investment property:</p>
      <div className="option-buttons">
        {amenityOptions.map((amenity) => (
          <button
            key={amenity}
            onClick={() => {
              const updatedAmenities = formData.preferredAmenities.includes(amenity)
                ? formData.preferredAmenities.filter((item) => item !== amenity)
                : [...formData.preferredAmenities, amenity];
              handleChange('preferredAmenities', updatedAmenities);
            }}
            className={`option-button ${formData.preferredAmenities.includes(amenity) ? 'selected' : ''}`}
          >
            {amenity}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={prevStep} className="nav-button">Back</button>
        <button 
          onClick={nextStep} 
          className="nav-button" 
          disabled={formData.budgetSlider === undefined || formData.budgetSlider === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
