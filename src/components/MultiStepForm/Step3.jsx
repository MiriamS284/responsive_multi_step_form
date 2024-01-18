import "./Step3.css";
import React from "react";

export default function Step3({
  selectedAddons,
  setSelectedAddons,
  isYearlyBilling,
}) {
  const toggleAddon = (addon) => {
    setSelectedAddons((prevSelectedAddons) => {
      if (prevSelectedAddons.includes(addon)) {
        return prevSelectedAddons.filter((item) => item !== addon);
      } else {
        return [...prevSelectedAddons, addon];
      }
    });
  };

  const addonPrices = {
    "Online Service": { monthly: 1, yearly: 10 },
    "Larger storage": { monthly: 2, yearly: 20 },
    "Customizable Profile": { monthly: 2, yearly: 20 },
  };

  const addonDescriptions = {
    "Online Service": "Access to multiplayer games",
    "Larger storage": "Extra 1 TB of cloud save",
    "Customizable Profile": "Custom theme on your profile",
  };

  // Funktion, um den richtigen Preis basierend auf der Abrechnungsperiode zu holen
  const getPrice = (addon) => {
    return isYearlyBilling
      ? addonPrices[addon].yearly
      : addonPrices[addon].monthly;
  };

  return (
    <div className="step3">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="cardContainerAdd">
        {Object.entries(addonPrices).map(([addon, prices]) => (
          <div
            key={addon}
            className={`cardAdd ${
              selectedAddons.includes(addon) ? "selected" : ""
            }`}
            onClick={() => toggleAddon(addon)}
          >
            <input type="checkbox" checked={selectedAddons.includes(addon)} />
            <div className="text-column">
              <h5>{addon}</h5>
              <p>{addonDescriptions[addon]}</p>
            </div>
            <span>
              +${getPrice(addon)}/{isYearlyBilling ? "yr" : "mo"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
