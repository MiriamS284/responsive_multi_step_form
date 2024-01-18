import { useState } from "react";
import StepSelector from "./MultiStepForm/StepSelector";
import Step1 from "./MultiStepForm/Step1";
import Step2 from "./MultiStepForm/Step2";
import Step3 from "./MultiStepForm/Step3";
import Step4 from "./MultiStepForm/Step4";
import Confirmation from "./MultiStepForm/Confirmation";
import NavigationButtons from "./MultiStepForm/NavigationButtons";

import "./MultiStepForm.css";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [attemptedToProceed, setAttemptedToProceed] = useState(false);

  const handleStepChange = (newStep) => {
    if (currentStep === 1 && newStep > currentStep) {
      setAttemptedToProceed(true);
    } else {
      setAttemptedToProceed(false);
    }

    if (currentStep === 1 && !isStep1Valid) {
      return;
    }

    setCurrentStep(newStep);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            setIsStep1Valid={setIsStep1Valid}
            attemptedToProceed={attemptedToProceed}
            setAttemptedToProceed={setAttemptedToProceed}
          />
        );
      case 2:
        return (
          <Step2
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            setIsYearlyBilling={setIsYearlyBilling}
          />
        );
      case 3:
        return (
          <Step3
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
            isYearlyBilling={isYearlyBilling}
          />
        );
      case 4:
        return (
          <Step4
            selectedPlan={selectedPlan}
            isYearlyBilling={isYearlyBilling}
            selectedAddons={selectedAddons}
            setCurrentStep={setCurrentStep}
          />
        );
      case 5:
        return <Confirmation />;
    }
  };

  return (
    <div className="multi-step-form-container">
      <div className="steps-list">
        <StepSelector
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
      <div className="step-content">
        {renderStep()}
        <NavigationButtons
          currentStep={currentStep}
          setCurrentStep={handleStepChange}
          handleStepChange={handleStepChange}
          maxSteps={5}
        />
      </div>
    </div>
  );
}

export default MultiStepForm;
