import React from "react";
import Button from "../Button/Button";
import "./PreFooter.css";

const PreFooter = ({ preFooterImage }) => {
  return (
    <div id="pre-footer" style={{ backgroundImage: `url(${preFooterImage})` }}>
      <h1>Ready to make a reservation?</h1>
      <div id="pre-footer-button">
        <Button text="Book a Table" />
      </div>
    </div>
  );
};

export default PreFooter;
