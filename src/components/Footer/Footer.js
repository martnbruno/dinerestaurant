import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="footer-h1">
        <Link to="/">
          <h1>dine</h1>
        </Link>
      </div>
      <div id="footer-location">
        <ul className="location">
          <li>ALCOBENDAS, MADRID</li>
          <li>SPAIN</li>
          <li>+00441234567</li>
        </ul>
      </div>
      <div id="footer-open">
        <ul className="open-times">
          <li>OPEN TIMES</li>
          <li>MON - FRI: 09.00 AM - 10.00 PM</li>
          <li>SAT - SUN: 09.00 AM - 11.30 PM</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
