import React from "react";
import "../SecondCard/SecondCard.css";
import Button from "../Button/Button";

const SecondCard = ({ title, subtitle, image2 }) => {
  return (
    <div className="secondcard-container">
      <div className="secondcard-image">
        <img
          src={image2}
          className="rounded mx-auto d-block img-fluid"
          alt="people dinning at the restaurant"
        />
      </div>
      <div className="secondcard-title-container">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="secondcard-button">
          <Button text="Book a Table" />
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
