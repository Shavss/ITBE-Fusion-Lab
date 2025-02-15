import React from 'react';

const Step5 = ({ nextStep, prevStep, handleChange, formData }) => {
  const amenityOptions = ['Eco-friendly Materials', 'Smart Systems', 'Parking', 'Fitness Center'];
  const sustainabilityOptions = ['High Energy Efficiency', 'Renewable Energy Sources', 'Green Certification'];

  const toggleAmenity = (amenity) => {
    const updatedAmenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter((item) => item !== amenity)
      : [...formData.amenities, amenity];
    handleChange('amenities', updatedAmenities);
  };

  return (
    <div className="form-card">
      <h2>Amenities and Sustainability</h2>
      <p>Select desired amenities:</p>
      <div className="option-buttons">
        {amenityOptions.map((amenity) => (
          <button
            key={amenity}
            onClick={() => toggleAmenity(amenity)}
            className={`option-button ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
          >
            {amenity}
          </button>
        ))}
      </div>
      <p>Preferred sustainability features:</p>
      <div className="option-buttons">
        {sustainabilityOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleChange('sustainability', option)}
            className={`option-button ${formData.sustainability === option ? 'selected' : ''}`}
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
          disabled={formData.amenities.length === 0 || !formData.sustainability}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step5;
