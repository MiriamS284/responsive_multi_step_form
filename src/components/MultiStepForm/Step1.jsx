import React, { useState, useEffect } from "react";
import "./Step1.css";

export default function Step1({
  setIsStep1Valid,
  attemptedToProceed,
  setAttemptedToProceed,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const checkForErrors = () => {
    const errors = {};
    if (!formData.name) errors.name = "This field is required";
    if (!formData.email) errors.email = "This field is required";
    if (!formData.phone) errors.phone = "This field is required";

    setFormErrors(errors);
    setIsStep1Valid(Object.keys(errors).length === 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  useEffect(() => {
    if (attemptedToProceed) {
      checkForErrors();
    }
  }, [attemptedToProceed]);

  return (
    <div className="step1">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <div className="label-error-container">
            <label htmlFor="name">Name</label>
            {attemptedToProceed && formErrors.name && (
              <span className="error-message">{formErrors.name}</span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="label-error-container">
            <label htmlFor="email">Email Address</label>
            {attemptedToProceed && formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="label-error-container">
            <label htmlFor="phone">Phone Number</label>
            {attemptedToProceed && formErrors.phone && (
              <span className="error-message">{formErrors.phone}</span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. +1234567890"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
