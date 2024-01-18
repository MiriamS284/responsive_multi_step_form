import React from "react";
import "./Step4.css";

export default function Step4({
  selectedPlan,
  isYearlyBilling,
  selectedAddons,
  setCurrentStep,
}) {
  const planPrices = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addonPrices = {
    "Online Service": { monthly: 1, yearly: 10 },
    "Larger storage": { monthly: 2, yearly: 20 },
    "Customizable Profile": { monthly: 2, yearly: 20 },
  };

  const calculateTotal = () => {
    let total = isYearlyBilling
      ? planPrices[selectedPlan].yearly
      : planPrices[selectedPlan].monthly;

    selectedAddons.forEach((addon) => {
      total += isYearlyBilling
        ? addonPrices[addon].yearly
        : addonPrices[addon].monthly;
    });

    return total * (isYearlyBilling ? 1 : 12); // Jahrespreis bereits berechnet, Monatspreis für 12 Monate
  };

  const handleEditPlan = () => {
    setCurrentStep(2); // Geht zurück zu Schritt 2
  };
  return (
    <div className="Step4">
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary-section">
        <div className="plan-container">
          <h5>{selectedPlan}</h5>
          <span>
            $
            {isYearlyBilling
              ? planPrices[selectedPlan].yearly
              : planPrices[selectedPlan].monthly}
            /{isYearlyBilling ? "yr" : "mo"}
          </span>
        </div>
        <button onClick={handleEditPlan}>Change</button>
        <hr></hr>
        <div>
          {selectedAddons.map((addon) => (
            <div key={addon} className="addon-container">
              <h5>{addon}</h5>
              <span>
                +$
                {isYearlyBilling
                  ? addonPrices[addon].yearly
                  : addonPrices[addon].monthly}
                /{isYearlyBilling ? "yr" : "mo"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="total-section">
        <h3>Total Cost</h3>
        <p>
          ${calculateTotal()}
          {isYearlyBilling ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
}
