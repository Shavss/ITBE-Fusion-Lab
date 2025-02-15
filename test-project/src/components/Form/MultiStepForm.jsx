import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Step0 from './Step0'; // Import the new Step0
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Dashboard from './Dashboard';
import propertiesData from '../../data/properties.json'; // Adjust path if needed
import './MultiStepForm.css';

const MultiStepForm = () => {
  // Start from step 0 now
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [dashboardProperties, setDashboardProperties] = useState([]);
  const [formData, setFormData] = useState({
    propertyPurpose: '',
    propertyType: '',
    investmentStrategy: '',
    budgetRange: '',
    preferredAmenities: [],
    unitSize: '',
    viewPreference: '',
    parkingNeeded: '',
    futurePlans: '',
    processStage: '',
    areaPreference: '',
    amenities: [],
    sustainability: '',
    accessibility: '',
    additionalDetails: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    setDashboardProperties(propertiesData); // or your generateMockProperties(formData)
    setSubmitted(true);
  };

  if (submitted) {
    return <Dashboard properties={dashboardProperties} />;
  }

  return (
    <div className="form-container">
      {/* Progress bar only shown from Step 1 onward, if you prefer */}
      {step >= 1 && <ProgressBar step={step} />}

      {step === 0 && (
        <Step0 nextStep={nextStep} />
      )}
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 3 && (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 4 && (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 5 && (
        <Step5
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 6 && (
        <Step6
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
