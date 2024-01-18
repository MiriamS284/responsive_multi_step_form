import "./StepSelector.css";

function StepSelector({ currentStep, setCurrentStep }) {
  return (
    <ul className="step-selector">
      <li
        className={currentStep === 1 ? "active" : ""}
        onClick={() => setCurrentStep(1)}
      >
        <span>1</span>
        <div>
          <h6>Step 1</h6>
          <h4>Your Info</h4>
        </div>
      </li>
      <li
        className={currentStep === 2 ? "active" : ""}
        onClick={() => setCurrentStep(2)}
      >
        <span>2</span>
        <div>
          <h6>Step 2</h6>
          <h4>Select Plan</h4>
        </div>
      </li>

      <li
        className={currentStep === 3 ? "active" : ""}
        onClick={() => setCurrentStep(3)}
      >
        <span>3</span>
        <div>
          <h6>Step 3</h6>
          <h4>Add Ons</h4>
        </div>
      </li>
      <li
        className={currentStep === 4 ? "active" : ""}
        onClick={() => setCurrentStep(4)}
      >
        <span>4</span>
        <div>
          <h6>Step 4</h6>
          <h4>Summary</h4>
        </div>
      </li>
    </ul>
  );
}

export default StepSelector;
