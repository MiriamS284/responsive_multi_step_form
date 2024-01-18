import "./NavigationButtons.css";

function NavigationButtons({
  currentStep,
  setCurrentStep,
  maxSteps,
  handleStepChange,
}) {
  return (
    <div className="btn-steps">
      {currentStep > 1 && (
        <button
          className="btn-back"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Go Back
        </button>
      )}

      {currentStep < maxSteps && currentStep < 4 && (
        <button
          className="btn-next"
          onClick={() => handleStepChange(currentStep + 1)}
        >
          Next Step
        </button>
      )}

      {currentStep === 4 && (
        <button
          className="btn-next"
          onClick={() => handleStepChange(currentStep + 1)}
        >
          Confirm
        </button>
      )}
    </div>
  );
}
export default NavigationButtons;
