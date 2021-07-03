import React from "react";
import "./ThirdCard.css";

const ThirdCard = ({ title, subtitle, image4, image5, image6 }) => {
  return (
    <div id="third-card">
      <div className="grid-title">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <div id="salmon">
        <div className="salmon-flex">
          <img src={image5} className="salmon-image" alt="salmon" />
          <div className="salmon-flex-title">
            <h3>Seared Salmon Fillet</h3>
            <h4>
              Our locally sourced salmon served with a refreshing buckwheat summer salad.
            </h4>
          </div>
        </div>
      </div>

      <div id="filet">
        <div className="filet-flex">
          <img src={image4} className="filet-image" alt="filet" />
          <div className="filet-flex-title">
            <h3>Rosemary Filet Mignon</h3>
            <h4>
              Our prime beef served to your taste with a delicious choice of seasonal sides.
            </h4>
          </div>
        </div>
      </div>

      <div id="mousse">
        <div className="mousse-flex">
          <img src={image6} className="mousse-image" alt="mousse" />
          <div className="mousse-flex-title">
            <h3>Summer Chocolate Mousse </h3>
            <h4>
              Creamy mousse combined with summer fruits and dark chocolate shavings.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;
