'use client'

import { useState } from 'react';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    bio: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const steps = {
    1: <StepOne formData={formData} handleChange={handleChange} nextStep={nextStep} />,
    2: <StepTwo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />,
    3: <StepThree formData={formData} prevStep={prevStep} />
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧭 Multi-Step Wizard</h2>
      {steps[step]}
    </div>
  );
}
