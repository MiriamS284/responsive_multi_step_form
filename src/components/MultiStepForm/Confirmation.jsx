import React from "react";
import "./Confirmation.css";
import circleCheck from "../../assets/images/icon-thank-you.svg";

function Confirmation() {
  return (
    <div className="confirmation">
      <img src={circleCheck} alt="Thank you" />
      <h1>Thank you!</h1>
      <p className="muted">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Confirmation;
