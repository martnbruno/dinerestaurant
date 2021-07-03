import React from "react";
import "./Card.css";

const Card = ({ title, subtitle, image1 }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img
          src={image1}
          className="rounded mx-auto d-block img-fluid"
          alt="gourmet dish"
        />
      </div>

      <div className="title-container">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Card;
