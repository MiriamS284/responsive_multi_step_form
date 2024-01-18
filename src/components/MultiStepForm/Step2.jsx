import React, { useEffect, useState } from "react";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

import "./Step2.css";

const planOptions = {
  Arcade: { monthly: 9, yearly: 90 },
  Advanced: { monthly: 12, yearly: 120 },
  Pro: { monthly: 15, yearly: 150 },
};

export default function Step2({
  selectedPlan,
  setSelectedPlan,
  setIsYearlyBilling,
  isYearlyBilling,
}) {
  const [planLength, setPlanLength] = useState(false);

  useEffect(() => {
    setIsYearlyBilling(planLength);
  }, [planLength, setIsYearlyBilling]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="step2">
      <h1>Choose Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="cardContainer">
        {/* Arcade */}
        <div
          key={`Arcade-${planLength ? "yearly" : "monthly"}`}
          className={`card ${selectedPlan === "Arcade" ? "selected" : ""}`}
          onClick={() => handleSelectPlan("Arcade")}
        >
          <img src={arcadeIcon} alt="Arcade Icon" />
          <div className="cardText">
            <h5>Arcade</h5>
            <p>
              ${planOptions.Arcade[planLength ? "yearly" : "monthly"]}/
              {planLength ? <span>yr</span> : <span>mo</span>}
            </p>
          </div>
          {planLength}
        </div>

        {/* Advanced */}
        <div
          key={`Advanced-${planLength ? "yearly" : "monthly"}`}
          className={`card ${selectedPlan === "Advanced" ? "selected" : ""}`}
          onClick={() => handleSelectPlan("Advanced")}
        >
          <img src={advancedIcon} alt="Advanced Icon" />
          <div className="cardText">
            <h5>Advanced</h5>
            <p>
              ${planOptions.Advanced[planLength ? "yearly" : "monthly"]}/
              {planLength ? <span>yr</span> : <span>mo</span>}
            </p>
          </div>
          {planLength}
        </div>

        {/* Pro */}
        <div
          key={`Pro-${planLength ? "yearly" : "monthly"}`}
          className={`card ${selectedPlan === "Pro" ? "selected" : ""}`}
          onClick={() => handleSelectPlan("Pro")}
        >
          <img src={proIcon} alt="Pro Icon" />
          <div className="cardText">
            <h5>Pro</h5>
            <p>
              ${planOptions.Pro[planLength ? "yearly" : "monthly"]}/
              {planLength ? <span>yr</span> : <span>mo</span>}
            </p>
          </div>
          {planLength}
        </div>
      </div>
      <div className="billing-cycle">
        <span className={!planLength ? "active" : ""}>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={planLength}
            onChange={() => setPlanLength(!planLength)}
          />
          <span className="slider round"></span>
        </label>
        <span className={planLength ? "active" : ""}>Yearly</span>
      </div>
    </div>
  );
}
